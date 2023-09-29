// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { addNewPost } from "./features/posts/postsSlice";

function App() {
  // type TNewPost = { title: string; content: string };
  let posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();
  let initialPost = {
    title: "",
    content: "",
  };
  const [newPost, setNewPost] = useState(initialPost);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;
    console.log(e);
    setNewPost((prevPost) => ({
      ...prevPost,
      [e.target.name]: value,
    }));
  }

  const date = new Date();

  function addBlog(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(addNewPost({ ...newPost, id: date.getTime().toString() }));
    setNewPost(initialPost);
  }

  console.log(newPost);
  return (
    <div>
      <div>{JSON.stringify(posts)}</div>
      <input
        onChange={(e) => handleChange(e)}
        name="title"
        type="text"
        value={newPost.title}
        placeholder="wrt"
      />
      <input
        onChange={(e) => handleChange(e)}
        name="content"
        type="text"
        value={newPost.content}
      />
      <button onClick={addBlog} style={{ display: "block", margin: "0 auto" }}>
        +
      </button>
    </div>
  );
}

export default App;
