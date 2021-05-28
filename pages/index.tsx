import React from "react";
import Head from "next/head";
import { Post, Category } from "../shared/types";
import { fetchCategories, fetchPosts } from "../api/summary";
import { Feed } from "../components/Feed/Feed";

type FrontProps = {
  posts: Post[];
  categories: Category[];
};

export async function getStaticProps() {
  const categories = await fetchCategories();
  const posts = await fetchPosts();
  return { props: { posts, categories } };
}

const Front = ({ posts, categories }: FrontProps) => {
  return (
    <>
      <Head>
        <title>Front page</title>
      </Head>
      <main>
        <Feed posts={posts} categories={categories} />
      </main>
    </>
  );
};

export default Front;
