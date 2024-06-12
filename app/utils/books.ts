import fs from "fs";
import matter from "gray-matter";

export interface BookMetadata {
  title: string;
  slug: string;
}

interface Book extends BookMetadata, matter.GrayMatterFile<string> {}

export function getBooksMetadata(): BookMetadata[] {
  const files = fs.readdirSync("books");
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`books/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}

export function getBook(slug: string): Book {
  const fileContents = fs.readFileSync(`books/${slug}.md`, "utf8");
  const matterResult = matter(fileContents);
  return {
    ...matterResult,
    title: matterResult.data.title,
    slug: slug,
  };
}
