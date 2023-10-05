import AuthorName from "../users/AuthorName";
import { TPost } from "./postsSlice";

const SinglePost = ({ post }: { post: TPost }) => {
  return (
    <article>
      <h1>{post.title.substring(0, 20)}</h1>
      <p>{post.body.substring(0, 30)}...</p>
      <AuthorName userID={post.userId} />
      <h4>{post.id}</h4>
      <button>Delete</button>
    </article>
  );
};

export default SinglePost;
