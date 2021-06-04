import fs from "fs";
import matter from "gray-matter";
import path from "path";
import remark from "remark";
import remarkHtml from "remark-html";
import { sortBy } from "./sortBy";

export async function getSortedPostsData(): Promise<Record<string, any>[]> {
  const dir = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(dir);
  const postData = await Promise.all(
    filenames.map(async (filename) => {
      const id = path.basename(filename, ".md");
      const filePath = path.join(dir, filename);
      const content = fs.readFileSync(filePath, "utf-8");
      const result = matter(content);
      const data = JSON.parse(JSON.stringify(result.data));
      const html = String(
        await remark().use(remarkHtml).process(result.content)
      );
      return { ...data, id, html };
    })
  );
  return sortBy(postData, (post) => post.date);
}
