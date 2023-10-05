import { useDispatch } from "react-redux";
import { TPost } from "./postsSlice";
import { AppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { uniqueStringByTime } from "../../../statics/apiUrl";
import UserOptions from "../users/UserOptions";

const EditPost = ({ post }: { post: TPost }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [blogInfo, setBlogInfo] = useState<TPost>({
    body: "",
    id: uniqueStringByTime(),
    title: "",
    userId: 0,
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBlogInfo((prevBlog) => ({
      ...prevBlog,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSelectAuthor(e: React.ChangeEvent<HTMLSelectElement>) {
    setBlogInfo((prevBlog) => ({
      ...prevBlog,
      userId: Number(e.target.value),
    }));
  }

  console.log(blogInfo);

  function handleEditBlog(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(editPost(blogInfo));
    navigate("/");
    // dispatch(addPost())
  }

  return (
    <form>
      <input
        onChange={(e) => handleInputChange(e)}
        type="text"
        name="title"
        id=""
        placeholder="title"
      />
      <input
        onChange={(e) => handleInputChange(e)}
        type="text"
        name="body"
        id=""
        placeholder="content"
      />
      <select
        onChange={(e) => handleSelectAuthor(e)}
        name=""
        id=""
        placeholder="Choose a User"
      >
        <option value=""></option>
        <UserOptions />
      </select>
      <button onClick={(e) => handleEditBlog(e)}>Add New Blog</button>
    </form>
  );
};

export default EditPost;
