import { GetServerSideProps } from "next";

interface SsrHeadersProps {
  test: string;
  csp: string;
}

export default function SsrHeaders(props: SsrHeadersProps) {
  return (
    <main style={{ margin: "2rem", fontSize: "1.25rem" }}>
      <p>Check the HTTP headers for this page, friend!</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<SsrHeadersProps> = async ({
  res,
}) => {
  const test = String(Math.floor(Math.random() * 100));
  const csp = new Date().toISOString();
  res.setHeader("X-Test", test);
  res.setHeader("Content-Security-Policy", csp);
  return { props: { test, csp } };
};
