import { allPosts } from ".contentlayer/generated";
import Post from "@/components/Post";
import type { NextPage } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

const Page: NextPage<Params> = ({ params }) => {
  const post = allPosts.find((post) => post.slug.substring(9) === params.slug);
  if (!post) notFound();
  return (
    <Post
      index={allPosts.findIndex(
        (post) => post.slug.substring(9) === params.slug
      )}
      {...post}
    />
  );
};

export default Page;
