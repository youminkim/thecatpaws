import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getBooksMetadata } from "./utils/books";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thecatpaws",
  description: "Stories from Jooha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const books = getBooksMetadata();
  const characters = [
    "snow.png",
    "bunbun.png",
    // "purr.png",
    // "mage.png",
    // "lila.png",
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="sidebar">
            <Link href="/" style={{ fontSize: 50 }}>
              {characters.map((character) => (
                <Image
                  key={character}
                  alt="thecatpaws"
                  src={`/${character}`}
                  width={50}
                  height={50}
                />
              ))}
            </Link>
            <div style={{ height: 20 }}></div>
            {books.map((book) => (
              <nav key={book.slug}>
                <Link href={`/${book.slug}`}>{book.title}</Link>
              </nav>
            ))}
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
