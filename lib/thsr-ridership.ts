import document from '@/data/ridership/thsr-network.json'

export const THSR_RIDERSHIP = document as {
  retrieved: string
  source: {
    title: string
    titleOriginal: string
    publisher: string
    indexUrl: string
    downloadUrl: string
    measure: string
    unit: string
  }
  observations: Array<{ period: string; passengers: number }>
}
