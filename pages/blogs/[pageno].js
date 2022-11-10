import React from "react";
import Layout from "../../layout/Layout";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const posts = await res.json();

  const paths = posts.map((currentEl) => {
    return {
      params: {
        pageno: currentEl.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.pageno;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const BlogDetails = ({ posts }) => {
  return (
    <Layout>
      <h2 className="mt-14">{posts.name}</h2>
    </Layout>
  );
};

export default BlogDetails;
