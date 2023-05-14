import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/actions";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default PostItem;
