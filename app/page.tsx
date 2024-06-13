import Markdown from "markdown-to-jsx";
import { getBook } from "./utils/books";

export default function Home() {
  const home = getBook("home");
  return <Markdown>{home.content}</Markdown>;
}
