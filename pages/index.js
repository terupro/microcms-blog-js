import Link from "next/link";
import { client } from "../libs/client";

// SSG (ビルド時にHTMLを生成する)
// ブログのデータを取得
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div>
      {blog.map((content) => {
        return (
          <li key={content.id}>
            <Link href={`blog/${content.id}/`}>
              <a>{content.title}</a>
            </Link>
          </li>
        );
      })}
    </div>
  );
}
