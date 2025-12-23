import { writeFileSync } from 'node:fs'
const pages = ['/', '/zayna', '/platform', '/book', '/why-us']
const base = process.env.SITE_URL || 'https://example.com'
const urlset = pages
  .map((p) => `<url><loc>${base}${p}</loc><changefreq>weekly</changefreq></url>`)
  .join('')
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>`
writeFileSync('public/sitemap.xml', xml)
console.log('Generated sitemap.xml')
