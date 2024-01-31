export default function sitemap() {
  return [
    {
      url: 'https://chargera.fr',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://chargera.fr/conditions-utilisation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://chargera.fr/mentions-legales',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://chargera.fr/politique-confidentialite',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://chargera.fr/propos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://chargera.fr/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // {
    //   url: 'https://acme.com/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ]
}