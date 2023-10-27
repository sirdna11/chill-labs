
"use client"
import React, { useState, useCallback } from 'react';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = useCallback(debounce(onSearch, 1000), [onSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <form className="searchbar">
      <div className="searchBar__item">
        <input 
          type="text" 
          value={searchTerm}
          onChange={handleChange} 
          placeholder="Search for a product..."
        />
      </div>
    </form>
  );
}

function debounce(func: Function, delay: number) {
  let timerId: NodeJS.Timeout;
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
