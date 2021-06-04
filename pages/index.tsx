import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { getSortedPostsData } from "../lib/posts";
import styles from "./index.module.css";

interface IndexProps {
  allPostData: Record<string, any>[];
}

const Index: FC<IndexProps> = ({ allPostData }) => {
  return (
    <>
      <main className={styles.main}>
        <h1>
          <a href="https://nextjs.org">Next.js</a> Blog Example
        </h1>
        <Image
          src="/profile.jpg"
          width={100}
          height={100}
          layout="fixed"
          alt=""
        />
        <ul>
          {allPostData.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a>
                    {post.title} ({post.id}) {post.date}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = await getSortedPostsData();
  return { props: { allPostData } };
};

export default Index;
