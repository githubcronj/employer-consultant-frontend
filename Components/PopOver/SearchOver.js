import { Button } from '@mui/material';
import RecentSearch from 'Components/SearchJob/recentSearch';
import SearchJobInput from 'Components/SearchJobComp/SearchJobInput';
import React, { useState } from 'react';

const SearchOver = ({ children, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };


  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isOpen && (
        <div>
                
            <RecentSearch />
           
        </div>
      )}
    </div>
  );
};

export default SearchOver;
