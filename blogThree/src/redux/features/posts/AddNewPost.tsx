import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { TPost, addPost } from "./postsSlice";
import UserOptions from "../users/UserOptions";

const AddNewPost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [blogInfo, setBlogInfo] = useState<TPost>({
    body: "",
    id: new Date().getTime(),
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

  function handleAddBlog(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(addPost(blogInfo));

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
      <button onClick={(e) => handleAddBlog(e)}>Add New Blog</button>
    </form>
  );
};

export default AddNewPost;
