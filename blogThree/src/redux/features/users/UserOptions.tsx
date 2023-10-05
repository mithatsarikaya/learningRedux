import { useSelector } from "react-redux";
import { getAllUsers } from "./usersSlice";

const UserOptions = () => {
  let users = useSelector(getAllUsers);
  return (
    <>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </>
  );
};

export default UserOptions;
