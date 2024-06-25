import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { getBook } from "./utils/books";

export default function Home() {
  const home = getBook("home");
  return (
    <Markdown
      options={{
        overrides: {
          img: {
            component: (props) => (
              <Image
                alt={"img"}
                {...props}
                width={400}
                height={400}
                style={{
                  objectFit: "contain",
                }}
              />
            ),
          },
        },
      }}
    >
      {home.content}
    </Markdown>
  );
}
