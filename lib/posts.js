import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

export function getPostSlugs(type) {
  const dir = path.join(process.cwd(), "content", type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
}

export function getPostBySlug(type, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(process.cwd(), "content", type, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const item = { slug: realSlug };

  fields.forEach((field) => {
    if (field === "slug") return;
    if (field === "content") item.content = content;
    else if (data[field] !== undefined) item[field] = data[field];
  });

  return item;
}

export function getAllPosts(type, fields = []) {
  const slugs = getPostSlugs(type);
  const posts = slugs
    .map((slug) => getPostBySlug(type, slug, fields))
    .filter(Boolean)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(remarkGfm).use(remarkHtml).process(markdown);
  return result.toString();
}
