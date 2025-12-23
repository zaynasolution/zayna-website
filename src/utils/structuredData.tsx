export function BusinessJsonLD({ name, url }: { name: string; url: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
