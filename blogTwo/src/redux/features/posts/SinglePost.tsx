import { TPost } from "./postsSlice";

const SinglePost = ({ post }: { post: TPost }) => {
  return (
    <article>
      <h1>{post.title.substring(0, 20)}</h1>
      <p>{post.body.substring(0, 30)}...</p>
      <h4>{post.userId}</h4>
      <button>Delete</button>
    </article>
  );
};

export default SinglePost;
