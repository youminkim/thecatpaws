import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getBooksMetadata } from "./utils/books";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const books = getBooksMetadata();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Link href="/">Thecatpaws</Link>
          <ul>
            {books.map((book) => (
              <li key={book.slug}>
                <Link href={`/${book.slug}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
