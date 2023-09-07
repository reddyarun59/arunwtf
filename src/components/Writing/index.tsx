"use client";
import { FC } from "react";
import Posts from "./Posts";

const Writing: FC = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-6 text-black dark:text-white">
          Blogs
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">
          Exploring Life and Tech through Words. Crafting the narrative of my
          life while navigating the evolving world of tech.
        </p>
      </div>
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default Writing;
