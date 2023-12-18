export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://blog.fmawo.com/sitemap.xml',
    host: 'https://blog.fmawo.com',
  };
}
