import { useDispatch } from "react-redux";
import AuthorName from "../users/AuthorName";
import { TPost, deleteAPost } from "./postsSlice";
import { AppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";

const SinglePost = ({ post }: { post: TPost }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  function handleDeletePost(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    dispatch(deleteAPost(post.id.toString()));
  }

  function handleNavigate(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    navigate(`/post/edit/${post.id}`);
  }
  return (
    <article>
      <h1>{post.title.substring(0, 20)}</h1>
      <p>{post.body.substring(0, 30)}...</p>
      <AuthorName userID={post.userId} />
      <h4>{post.id}</h4>
      <button onClick={(e) => handleDeletePost(e)}>Delete</button>
      <button onClick={(e) => handleNavigate(e)}>Edit</button>
    </article>
  );
};

export default SinglePost;
