import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";

interface PostIdProps {
  post?: Record<string, any>;
}

const PostId: FC<PostIdProps> = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post?.html }} />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getSortedPostsData();
  const paths = posts.map((post) => `/posts/${post.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getSortedPostsData();
  const post = posts.find((p) => p.id === params?.post_id);
  return { props: { post } };
};

export default PostId;
