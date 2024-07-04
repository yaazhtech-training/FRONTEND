import React, { useState } from 'react';

const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on searchTerm
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item}>
            {/* Highlight matching text */}
            {item.replace(
              new RegExp(`(${searchTerm})`, 'gi'),
              (match, text) => `<mark>${text}</mark>`
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
