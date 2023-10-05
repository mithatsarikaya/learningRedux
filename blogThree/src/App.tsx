import { useDispatch } from "react-redux";
import "./App.css";
import AllPosts from "./redux/features/posts/AllPosts";
import UserOptions from "./redux/features/users/UserOptions";
import { TPost, addPost } from "./redux/features/posts/postsSlice";
import { useState } from "react";
import { AppDispatch } from "./redux/app/store";

function App() {
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
    <main>
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
      <AllPosts />
    </main>
  );
}

export default App;
