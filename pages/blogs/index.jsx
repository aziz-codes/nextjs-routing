import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Link from "next/link";
const index = ({ posts }) => {
  return (
    <Layout>
      <div className="mt-14 m-10 flex flex-col gap-4 text-sky-600">
        {posts.slice(0, 5).map((item, index) => (
          <Link key={index} href={`blogs/${item.id}`}>
            {item.username}
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
