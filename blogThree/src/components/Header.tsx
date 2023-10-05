import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Redux Blog</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/post"}>Post</Link>
      </nav>
    </header>
  );
};

export default Header;
