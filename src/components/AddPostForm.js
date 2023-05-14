import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAddPost = () => {
    const newPost = {
      title,
      body,
    };
    dispatch(addPost(newPost));
    setTitle('');
    setBody('');
  };

  return (
    <div className="my-4">
      <h2 className="text-xl mb-2 bg-sky-500 p-4 rounded-xl font-mono">Add a New Post</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>
      <div className="mt-2">
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full h-24"
        ></textarea>
      </div>
      <button
        onClick={handleAddPost}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Post
      </button>
    </div>
  );
};

export default AddPostForm;
