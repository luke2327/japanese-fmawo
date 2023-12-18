import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://blog.fmawo.com/proverb/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/proverb', '/uses', '/journey'].map((route) => ({
    url: `https://blog.fmawo.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
