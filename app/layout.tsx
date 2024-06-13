import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getBooksMetadata } from "./utils/books";
import Link from "next/link";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="sidebar">
            <Link href="/" style={{ fontSize: 50 }}>
              😸
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
