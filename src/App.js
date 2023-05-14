import './App.css';
import React from 'react';
import PostLists from './components/PostLists';
import SearchBar from './components/SearchBar';
import SortOptions from './components/SortOptions';
import AddPostForm from './components/AddPostForm';

function App() {
  return (
    <div className="App m-4">
      <h1 className=' font-mono text-3xl font-medium bg-orange-500 p-5 text-black rounded-xl'>Blog Posts</h1>
      <SearchBar />
      <SortOptions />
      <AddPostForm />
      <PostLists />
    </div>
  );
};



export default App;
