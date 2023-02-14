import client from "./client";
import groq from "groq";
export async function getStaticProps() {
  const query = groq` * [_type == 'post'] `;
  const data = await client.fetch(query);
  return {
    props: {
      posts: data
    }
  };
}
export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="bg-white">
      <div>
        <h1>Hello</h1>
        <p>Hello</p>
      </div>

    </div>
  );
}
