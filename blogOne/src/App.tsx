// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewPost,
  deleteAPost,
  getAllPosts,
} from "./features/posts/postsSlice";

function App() {
  // type TNewPost = { title: string; content: string };
  let posts = useSelector(getAllPosts);
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

  function addBlog(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(addNewPost(newPost));
    setNewPost(initialPost);
  }
  function deleteBlog(idToDelete: string) {
    dispatch(deleteAPost(idToDelete));
  }

  console.log({ posts });
  return (
    <div>
      <div>
        {posts.map((p) => (
          <article
            key={p.id}
            style={{ border: "solid 2px" }}
            onClick={() => deleteBlog(p.id)}
          >
            <h1>{p.title}</h1>
            <p>{p.content}</p>
          </article>
        ))}
      </div>
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
