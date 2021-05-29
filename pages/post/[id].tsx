import React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";

import { fetchPost } from "../../api/post";
import { fetchComments } from "../../api/comments";

import { State, store } from "../../store";
import { UPDATE_POST_ACTION } from "../../store/post";
import { UPDATE_COMMENTS_ACTION } from "../../store/comments";

import { Loader } from "../../components/Loader/Loader";
import { PostBody } from "../../components/Post/PostBody";
import { Comments } from "../../components/Comments/Comments";

// instead of passing it right in Post component’s props we dispatch() actions,
// that update our store with this data.
export const getServerSideProps = store.getServerSideProps(
  async ({ store, params }) => {
    if (typeof params.id !== "string") {
      throw new Error("Unexpected id");
    }
    const post = await fetchPost(params.id);
    const comments = await fetchComments(params.id);

    store.dispatch({ type: UPDATE_POST_ACTION, post });
    store.dispatch({ type: UPDATE_COMMENTS_ACTION, comments });
  }
);

const Post: NextPage = () => {
  const { post, comments } = useSelector<State, State>((state) => state);

  if (!post) return <Loader />;
  return (
    <>
      <PostBody post={post} />
      <Comments comments={comments} post={post.id} />
    </>
  );
};

export default Post;
