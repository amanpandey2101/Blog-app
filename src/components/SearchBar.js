import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import {RotateLoader} from "react-spinners"

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const loading = useSelector((state)=> state.loading)

  const handleSearch = () => {
    dispatch(fetchPosts(searchTerm));
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
     
      {loading && (
        <div className="ml-2">
          <RotateLoader color="#4a4a4a" size={8} margin={2} />
        </div>
      )}
      
    </div>
  );
};

export default SearchBar;
