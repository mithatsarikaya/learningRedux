import { useParams } from "react-router-dom";

const EditPost = () => {
  const { postID } = useParams();
  return <div>{JSON.stringify(postID)}</div>;
};

export default EditPost;
