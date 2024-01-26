import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const pagesDirectory = path.join(process.cwd(), 'pages-md');

export interface PageData {
  id: string,
  title: string
}

export interface PageDataWithContent extends PageData {
  contentHtml: string
}

export function getAllPageIds() {
  const fileNames = fs.readdirSync(pagesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPageData(id : string) : Promise<PageDataWithContent> {
  const fullPath = path.join(pagesDirectory, `${id}.md`);
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
  };
}