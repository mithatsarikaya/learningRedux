import { useSelector } from "react-redux";
import { getAllUsers } from "./usersSlice";

const AuthorName = ({ userID }: { userID: number }) => {
  let users = useSelector(getAllUsers);
  //   console.log(users);s
  let author = users.find((u) => u.id == userID);
  return <h4>{author?.name}</h4>;
};

export default AuthorName;
