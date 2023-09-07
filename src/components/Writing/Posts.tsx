import { Post, allPosts } from "contentlayer/generated";
import Link from "next/link";
import { FC } from "react";
import { format } from "date-fns";

const sortedPosts = allPosts.sort((a, b) =>
  a.published < b.published ? 1 : -1
);

const Post: FC<Post> = (props) => (
  <Link className="" href={props.slug}>
    <h2>{props.title}</h2>
    <p>{format(new Date(props.published), "dd/MM")}</p>
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
