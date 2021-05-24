import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";

export default function PostId({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getSortedPostsData();
  const paths = posts.map((post) => ["/posts", post.id].join("/"));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = await getSortedPostsData();
  const post = posts.find((p) => p.id === params.post_id);
  return { props: { post } };
}
