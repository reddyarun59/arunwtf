import { Post, allPosts } from "contentlayer/generated";
import Link from "next/link";
import { FC } from "react";
import { format } from "date-fns";

const sortedPosts = allPosts.sort((a, b) =>
  a.published < b.published ? 1 : -1
);

const Post: FC<Post> = (props) => (
  <Link className="" href={props.slug}>
    <div className="relative group py-5">
      <div className="absolute -inset-y-2 -inset-x-2 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:rounded-2xl md:-inset-x-4"></div>
      <div className="relative z-10 space-y-1 flex flex-col">
        <div className="">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 ">
            {props.title}
          </h2>
          <p className="text-sm md:text-base dark:text-zinc-400/90">
            {props.description}
          </p>
        </div>
        <p className="text-zinc-400 text-sm md:text-base">
          {format(new Date(props.published), "dd/MM/yyyy")}
        </p>
      </div>
    </div>
  </Link>
);

const Posts: FC = () => {
  return (
    <div className="">
      {sortedPosts.map((post, index) => (
        <div className="" key={index}>
          <Post {...post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
