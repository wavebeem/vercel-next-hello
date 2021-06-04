import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { FC } from "react";
import "./globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Default Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
