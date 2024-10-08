import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/Post-list-store";
import "./post.css";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {post.title}
          <span
            className="badge bg-danger"
            role="button"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete size={20} />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="mb-2">
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag me-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
