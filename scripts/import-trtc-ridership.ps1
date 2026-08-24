<#
.SYNOPSIS
  Fetch and reduce TRTC's official monthly station ODS files.

The operator publishes a station-by-day matrix rather than a ready-made line
table. This importer keeps the dated monthly station sums and a network sum,
leaving line allocation to the page layer because interchange stations are
physical-station columns in the source, not line-separated columns.
#>

[CmdletBinding()]
param(
  [string]$Output = 'data/ridership/trtc-station.json',
  [string[]]$Periods = @(
    '202507', '202508', '202509', '202510', '202511', '202512',
    '202601', '202602', '202603', '202604', '202605', '202606', '202607'
  )
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$outputPath = Join-Path $root $Output
$tempRoot = Join-Path ([IO.Path]::GetTempPath()) 'taipei-transit-trtc-ridership'
New-Item -ItemType Directory -Force -Path $tempRoot | Out-Null

$odsNs = 'urn:oasis:names:tc:opendocument:xmlns:table:1.0'
$textNs = 'urn:oasis:names:tc:opendocument:xmlns:text:1.0'
$ns = $null

function Get-Cells([Xml.XmlElement]$row) {
  $cells = [Collections.Generic.List[string]]::new()
  foreach ($cell in $row.SelectNodes('./table:table-cell', $script:ns)) {
    $repeat = 1
    $repeatAttr = $cell.GetAttributeNode('number-columns-repeated', $script:odsNs)
    if ($repeatAttr) { $repeat = [int]$repeatAttr.Value }
    $value = (($cell.SelectNodes('.//text:p', $script:ns) | ForEach-Object { $_.InnerText }) -join ' ').Trim()
    for ($i = 0; $i -lt $repeat; $i++) { $cells.Add($value) }
  }
  while ($cells.Count -gt 0 -and [string]::IsNullOrWhiteSpace($cells[$cells.Count - 1])) {
    $cells.RemoveAt($cells.Count - 1)
  }
  return ,$cells.ToArray()
}

function Normalize-Name([string]$name) {
  return (($name -replace '\s*\([^)]*\)$', '').Trim().ToLowerInvariant())
}

function To-Number([string]$value) {
  $clean = ($value -replace ',', '').Trim()
  $number = 0.0
  if ([double]::TryParse($clean, [Globalization.NumberStyles]::Any, [Globalization.CultureInfo]::InvariantCulture, [ref]$number)) {
    return $number
  }
  return 0.0
}

function Period-Label([string]$period) {
  return $period.Substring(0, 4) + '-' + $period.Substring(4, 2)
}

$stations = Get-Content (Join-Path $root 'data/tdx/TRTC/station.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$byName = @{}
foreach ($station in $stations) {
  $key = Normalize-Name $station.StationName.En
  if (-not $byName.ContainsKey($key)) { $byName[$key] = [Collections.Generic.List[object]]::new() }
  $byName[$key].Add($station)
}

$totals = @{}
$daysByPeriod = @{}
$sourceFiles = @()

foreach ($period in $Periods) {
  $odsPath = Join-Path $tempRoot "${period}_en.ods"
  $zipPath = "$odsPath.zip"
  Invoke-WebRequest -Uri "https://web.metro.taipei/RidershipPerStation/${period}_en.ods" -OutFile $odsPath
  Copy-Item -LiteralPath $odsPath -Destination $zipPath -Force
  $xmlText = (& tar -xOf $zipPath content.xml) -join "`n"
  $doc = [xml]$xmlText
  $script:ns = New-Object Xml.XmlNamespaceManager($doc.NameTable)
  $script:ns.AddNamespace('table', $script:odsNs)
  $script:ns.AddNamespace('text', $script:textNs)
  $periodTotals = @{}
  $days = 0
  $firstTable = $true
  foreach ($table in $doc.SelectNodes('//table:table', $script:ns)) {
    $tableName = $table.GetAttribute('name', $script:odsNs)
    $role = if ($tableName -match 'exit') { 'exit' } else { 'entry' }
    $rows = $table.SelectNodes('./table:table-row', $script:ns)
    $headers = Get-Cells $rows[0]
    $columns = @{}
    for ($i = 1; $i -lt $headers.Count; $i++) {
      $key = Normalize-Name $headers[$i]
      if ($byName.ContainsKey($key)) { $columns[$i] = $byName[$key] }
    }
    for ($r = 1; $r -lt $rows.Count; $r++) {
      $values = Get-Cells $rows[$r]
      if ($values.Count -lt 2 -or [string]::IsNullOrWhiteSpace($values[0])) { continue }
      if ($firstTable) { $days++ }
      foreach ($index in $columns.Keys) {
        $value = if ($index -lt $values.Count) { To-Number $values[$index] } else { 0 }
        foreach ($station in $columns[$index]) {
          $code = $station.StationID
          if (-not $periodTotals.ContainsKey($code)) {
            $periodTotals[$code] = @{ entry = 0.0; exit = 0.0 }
          }
          $periodTotals[$code][$role] += $value
        }
      }
    }
    $firstTable = $false
  }
  $daysByPeriod[$period] = $days
  foreach ($code in $periodTotals.Keys) {
    if (-not $totals.ContainsKey($code)) { $totals[$code] = @{} }
    $totals[$code][$period] = @{
      entry = [math]::Round($periodTotals[$code].entry, 0)
      exit = [math]::Round($periodTotals[$code].exit, 0)
    }
  }
  $sourceFiles += [ordered]@{
    period = Period-Label $period
    url = "https://web.metro.taipei/RidershipPerStation/${period}_en.ods"
  }
}

$networkByPeriod = @{}
foreach ($period in $Periods) {
  $entry = 0.0
  $exit = 0.0
  $seenNames = @{}
  foreach ($station in $stations) {
    $name = $station.StationName.En
    if ($seenNames.ContainsKey($name)) { continue }
    $seenNames[$name] = $true
    if ($totals.ContainsKey($station.StationID) -and $totals[$station.StationID].ContainsKey($period)) {
      $entry += $totals[$station.StationID][$period].entry
      $exit += $totals[$station.StationID][$period].exit
    }
  }
  $networkByPeriod[$period] = @{ entry = [int]$entry; exit = [int]$exit }
}

$stationRows = foreach ($station in ($stations | Sort-Object StationID)) {
  $periodsOut = @()
  foreach ($period in $Periods) {
    $entry = if ($totals.ContainsKey($station.StationID) -and $totals[$station.StationID].ContainsKey($period)) {
      [int]$totals[$station.StationID][$period].entry
    } else { 0 }
    $exit = if ($totals.ContainsKey($station.StationID) -and $totals[$station.StationID].ContainsKey($period)) {
      [int]$totals[$station.StationID][$period].exit
    } else { 0 }
    $periodsOut += [ordered]@{
      period = Period-Label $period
      value = $entry + $exit
      entry = $entry
      exit = $exit
      days = [int]$daysByPeriod[$period]
    }
  }
  [ordered]@{
    operator = 'TRTC'
    code = $station.StationID
    line = $station.StationID -replace '\d.*$', ''
    name = $station.StationName.En
    nameZh = $station.StationName.Zh_tw
    periods = $periodsOut
  }
}

$networkRows = foreach ($period in $Periods) {
  $label = Period-Label $period
  $network = $networkByPeriod[$period]
  [ordered]@{
    period = $label
    value = [int]$network.exit
    entry = [int]$network.entry
    exit = [int]$network.exit
    days = [int]$daysByPeriod[$period]
  }
}

$document = [ordered]@{
  retrieved = '2026-08-24'
  currentPeriod = Period-Label $Periods[-1]
  source = [ordered]@{
    id = 'trtc-station-ods'
    title = 'Ridership Counts — monthly station ODS files'
    titleOriginal = 'Ridership Counts - station entry/exit statistics'
    publisher = 'Taipei Rapid Transit Corporation'
    indexUrl = 'https://english.metro.taipei/cp.aspx?n=C702FF0562802D53'
    accessed = '2026-08-24'
    kind = 'primary'
    measure = 'Station value is entry plus exit movement; network value uses the exit count, which matches the operator system-trip convention. Both dimensions are retained.'
    files = $sourceFiles
  }
  stations = $stationRows
  network = $networkRows
}

New-Item -ItemType Directory -Force -Path (Split-Path -Parent $outputPath) | Out-Null
$jsonText = $document | ConvertTo-Json -Depth 12
[IO.File]::WriteAllText($outputPath, $jsonText + [Environment]::NewLine, [Text.UTF8Encoding]::new($false))
Write-Output "wrote ${Output}: $($stationRows.Count) station records, $($sourceFiles.Count) months"
