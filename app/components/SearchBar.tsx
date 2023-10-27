"use client"
import React, { useState, useCallback } from 'react';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(
    debounce((query: string) => {
      setIsLoading(false); // Hide loading when debounce function is called
      onSearch(query); // Call the provided search function
    }, 1000),
    [onSearch]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setIsLoading(true); // Show loading when the user starts typing
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
        {isLoading && <div className="loading-indicator">Loading...</div>} {/* Loading indicator */}
      </div>
    </form>
  );
};

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
