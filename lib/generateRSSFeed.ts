import fs from 'fs';
import { Feed, FeedOptions } from 'feed';
import { PostDataWithExcerpt } from './posts';

export default async function generateRssFeed(allPosts : PostDataWithExcerpt[]) {
  const site_url = process.env.SITE_URL!;

  const feedOptions : FeedOptions = {
    title: 'KWBlog',
    description: "Kevin Berridge's blog",
    id: site_url,
    link: site_url,
    favicon: `${site_url}/favicon.png`,
    feedLinks: {
      rss2: `${site_url}/feed.rss`,
      atom: `${site_url}/atom.xml`
    },
    copyright: "Kevin Berridge"
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

  fs.writeFileSync('./public/feed.rss', feed.rss2());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
}