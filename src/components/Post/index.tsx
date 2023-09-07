import { Post } from "contentlayer/generated";
import { FC } from "react";
import { Layout } from "@components/Layout";
import MDX from "@components/MDX";
import Header from "./Header";

const Post: FC<{ index: number } & Post> = (post) => {
  return (
    <Layout>
      <div>
        <article>
          <Header {...post} />
          <div>
            <MDX code={post.body.code} />
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Post;
