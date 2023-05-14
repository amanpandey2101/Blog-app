import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';

const SortOptions = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('');

  const handleSort = (e) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
    dispatch(fetchPosts('', selectedSort));
  };

  return (
    <div className="my-4">
      <label className="mr-2">Sort By:</label>
      <select
        value={sortBy}
        onChange={handleSort}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">None</option>
        <option value="title">Title</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default SortOptions;
