// import { useState } from "react";
import "./App.css";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  let posts = useSelector((state: RootState) => state.posts);
  return <div>{JSON.stringify(posts)}</div>;
}

export default App;
