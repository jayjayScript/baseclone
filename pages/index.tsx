import fs from "fs";
import path from "path";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const htmlPath = path.join(process.cwd(), "index.html");
  const html = fs.readFileSync(htmlPath, "utf8");

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(html);
  res.end();

  return {
    props: {},
  };
};

export default function HomePage() {
  return null;
}
