import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkExcerpt from 'remark-excerpt';

export interface PostData {
  id: string,
  title: string,
  published: string,
}

export interface PostDataWithExcerpt extends PostData {
  excerpt: string;
}

export interface PostDataWithContent extends PostData {
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), 'posts-md');

export async function getSortedPostsWithExcerpt() : Promise<(PostDataWithExcerpt & PostDataWithContent)[]> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown to html excerpt
    const excerptResult = await remark()
      .use(remarkExcerpt)
      .use(html, { sanitize: false })
      .process(matterResult.content);
    const excerptHtml = excerptResult.toString();

    // Use remark to convert markdown to html
    const contentResult = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);
    const contentHtml = contentResult.toString();

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title as string,
      published: matterResult.data.published as string,
      excerpt: excerptHtml,
      contentHtml: contentHtml
    };
  });

  const reallyAllPostsData = await Promise.all(allPostsData);
  // Sort posts by date DESC
  return reallyAllPostsData.sort((a, b) => {
    if (Date.parse(a.published) < Date.parse(b.published)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id : string) : Promise<PostDataWithContent> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    title: matterResult.data.title as string,
    published: matterResult.data.published as string
  };
}