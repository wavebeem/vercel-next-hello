import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import styles from "./index.module.css";

export default function Home({ allPostData }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Link href="/posts/first-post">
          <a>First Post</a>
        </Link>

        <Image src="/profile.jpg" width={100} height={100} alt="" />

        <ul>
          {allPostData.map((post) => {
            return (
              <ul key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a>
                    {post.title} ({post.id}) {post.date}
                  </a>
                </Link>
              </ul>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const allPostData = await getSortedPostsData();
  return { props: { allPostData } };
}
