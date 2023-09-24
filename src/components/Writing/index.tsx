"use client";
import { FC } from "react";
import Posts from "./Posts";

const Writing: FC = () => {
  return (
    <div>
      <div className="mb-6 md:mb-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 md:mb-4 text-black dark:text-white">
          Blogs
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
          Crafting the narrative of my journey while navigating the
          ever-evolving world of tech.
        </p>
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Writing;
