import "./App.css";
import AllPosts from "./redux/features/posts/AllPosts";
import UserOptions from "./redux/features/users/UserOptions";

function App() {
  return (
    <main>
      <form>
        <input type="text" name="" id="" placeholder="title" />
        <input type="text" name="" id="" placeholder="content" />
        <select name="" id="" placeholder="Choose User">
          <option value=""></option>
          <UserOptions />
        </select>
        <button>Add</button>
      </form>
      <AllPosts />
    </main>
  );
}

export default App;
