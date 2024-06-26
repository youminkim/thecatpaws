import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface BookMetadata {
  title: string;
  slug: string;
}

interface Book extends BookMetadata, matter.GrayMatterFile<string> {}

const getBooksBasePath = () => {
  return path.join(process.cwd(), "books");
};

export function getBooksMetadata(): BookMetadata[] {
  const files = fs.readdirSync("books");
  const markdownPosts = files
    .filter((file) => file.endsWith(".md"))
    .filter((file) => file !== "home.md"); // home.md is for the home page

  // get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      `${getBooksBasePath()}/${filename}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      slug: filename.replace(".md", ""),
    };
  });
  return posts.sort((a, b) => a.title.localeCompare(b.title));
}

export function getBook(slug: string): Book {
  const fileContents = fs.readFileSync(
    `${getBooksBasePath()}/${slug}.md`,
    "utf8"
  );
  const matterResult = matter(fileContents);
  return {
    ...matterResult,
    title: matterResult.data.title,
    slug: slug,
  };
}
