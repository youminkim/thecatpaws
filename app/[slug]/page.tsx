import Markdown from "markdown-to-jsx";
import { getBook } from "../utils/books";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { title } = getBook(params.slug);
  return {
    title,
  };
}

export default function BookPage(props: { params: { slug: string } }) {
  const slug = props.params.slug;
  const book = getBook(slug);
  return <Markdown>{book.content}</Markdown>;
}
