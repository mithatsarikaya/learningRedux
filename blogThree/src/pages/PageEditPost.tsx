import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByID } from "../redux/features/posts/postsSlice";
import { RootState } from "../redux/app/store";
import EditPost from "../redux/features/posts/EditPost";

const PageEditPost = () => {
  const { postID } = useParams();

  let post =
    postID && useSelector((state: RootState) => getPostByID(state, postID));
  console.log(post);

  if (!post) return <div>There is no such a id {postID}</div>;

  return (
    <div>
      <EditPost post={post} />
    </div>
  );
};

export default PageEditPost;
