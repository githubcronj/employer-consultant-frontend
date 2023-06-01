import React, { useState } from 'react';

const Popover = ({ children, onClick }) => {
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
        <div className="absolute top-full left-5 mt-2 px-4 py-2 bg-[#EAE9EA] border rounded border-gray-300 shadow">
          <p className="text-[16px] text-center">Select and add into shortlist</p>
        </div>
      )}
    </div>
  );
};

export default Popover;
