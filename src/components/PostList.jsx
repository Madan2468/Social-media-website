import { useContext } from "react";
import Post from "./Post";
import "./PostList.css";
import { PostList as PostListData } from "../store/Post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);

  if (postList.length === 0) {
    return <div className="text-center mt-4">No posts available.</div>;
  }

  return (
    <div className="container">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
