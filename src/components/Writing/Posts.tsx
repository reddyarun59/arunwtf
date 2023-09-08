import { Post, allPosts } from "contentlayer/generated";
import Link from "next/link";
import { FC } from "react";
import { format } from "date-fns";

const sortedPosts = allPosts.sort((a, b) =>
  a.published < b.published ? 1 : -1
);

const Post: FC<Post> = (props) => (
  <Link className="" href={props.slug}>
    <div className="flex justify-between">
      <div className="hover:opacity-80">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          {props.title}
        </h2>
        <p className="text-sm md:text-base">{props.description}</p>
      </div>
      <p className="pl-4 text-zinc-400 text-sm md:text-base">
        {format(new Date(props.published), "dd/MM")}
      </p>
    </div>
  </Link>
);

const Posts: FC = () => {
  return (
    <div>
      {sortedPosts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
