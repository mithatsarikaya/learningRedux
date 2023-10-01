import { useDispatch, useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import { useEffect } from "react";
import {
  fetchPosts,
  getAllPosts,
  getPostError,
  getPostStatus,
} from "./postsSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

const AllPosts = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  let posts = useSelector(getAllPosts);
  let postsError = useSelector(getPostError);
  let postStatus = useSelector(getPostStatus);

  let content;
  console.log(postStatus);

  useEffect(() => {
    if (postStatus == "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus]);

  if (postStatus == "succeeded") {
    console.log(posts);
    content = posts.map((post) => <SinglePost key={post.id} post={post} />);
  } else if (postStatus == "loading") {
    content = <div>Loading...</div>;
  } else if (postStatus == "failed") {
    content = <div>{postsError}</div>;
  }

  return <section>{content}</section>;
};
export default AllPosts;
