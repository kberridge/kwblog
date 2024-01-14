import fs from 'fs';
import { Feed } from 'feed';

export default async function generateRssFeed(allPosts) {
  const site_url = process.env.SITE_URL;

  const feedOptions = {
    title: 'KWBlog',
    description: "Kevin Berridge's blog",
    id: site_url,
    link: site_url,
    favicon: `${site_url}/favicon.png`,
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      atom: `${site_url}/atom.xml`
    }
  };

  const feed = new Feed(feedOptions);

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/posts/${post.id}`,
      link: `${site_url}/posts/${post.id}`,
      date: new Date(post.published),
      content: post.excerpt
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.rss2());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
}