import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://semlohsystems.com'
  const lastModified = new Date()

  const routes = [
    '',
    '/about',
    '/hp-capital',
    '/software',
    '/founders',
    '/founders/george',
    '/founders/connor',
    '/contact',
    '/newsroom',
    '/legal',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
