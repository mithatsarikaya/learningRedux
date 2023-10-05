import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";
import PageEditPost from "./pages/PageEditPost";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/edit/:postID" element={<PageEditPost />} />
      </Routes>
    </main>
  );
}

export default App;
