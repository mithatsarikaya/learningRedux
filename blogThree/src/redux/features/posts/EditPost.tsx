import { useDispatch } from "react-redux";
import { TPost, editPost } from "./postsSlice";
import { AppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserOptions from "../users/UserOptions";

const EditPost = ({ post }: { post: TPost }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // const [blogInfo, setBlogInfo] = useState<TPost>({
  //   body: post.body,
  //   id: post.id,
  //   title: post.title,
  //   userId: post.userId,
  // });

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);

  console.log(title, content, userId);

  // function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   console.log(e.target.value);
  //   setBlogInfo((prevBlog) => ({
  //     ...prevBlog,
  //     [e.target.name]: e.target.value,
  //   }));
  // }

  // function handleSelectAuthor(e: React.ChangeEvent<HTMLSelectElement>) {
  //   console.log("handleselect");
  //   setBlogInfo((prevBlog) => ({
  //     ...prevBlog,
  //     userId: Number(e.target.value),
  //   }));
  // }

  // console.log(blogInfo);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);
  const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setUserId(Number(e.target.value));

  function handleEditBlog(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(editPost({ body: content, id: post.id, title, userId }));
    navigate("/");
  }

  return (
    <form>
      <input
        onChange={(e) => onTitleChanged(e)}
        type="text"
        name="title"
        id=""
        placeholder="title"
        value={title}
      />
      <input
        onChange={(e) => onContentChanged(e)}
        value={content}
        type="text"
        name="body"
        id=""
        placeholder="content"
      />
      <select
        onChange={(e) => onAuthorChanged(e)}
        name=""
        id=""
        placeholder="Choose a User"
        defaultValue={userId}
      >
        <option value=""></option>
        <UserOptions />
      </select>
      <button onClick={(e) => handleEditBlog(e)}>Edit</button>
    </form>
  );
};

export default EditPost;
