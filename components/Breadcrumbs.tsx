import Link from '@/components/LocaleLink'

/** The "Train › Lines › Wenhu Line" trail above a page title. */
export default function Breadcrumbs({
  trail,
}: {
  trail: { href?: string; label: string }[]
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {trail.map((crumb) => (
        <span key={crumb.label}>
          <span className="sep" aria-hidden="true">
            ›
          </span>
          {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
        </span>
      ))}
    </nav>
  )
}
