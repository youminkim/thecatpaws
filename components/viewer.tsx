"use client";

import Image from "next/image";
import { useState } from "react";

export default function Viewer({ images }: { images: string[] }) {
  const [page, setPage] = useState(0);
  const imageArray = typeof images === "string" ? JSON.parse(images) : images;

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: 500,
        }}
      >
        <Image
          layout="fill"
          objectFit="contain"
          alt={`Image ${page}`}
          src={imageArray[page]}
        />
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === imageArray.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
