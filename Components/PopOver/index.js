import React, { useState } from "react";

const Popover = ({ children, onClick, text }) => {
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
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isOpen && (
        <div className="absolute top-0 right-full mt-2 px-4 py-2 bg-[#EAE9EA] text-[#131523] border rounded border-gray-300 shadow w-[150px] h-[70px] flex items-center ">
          <p className="text-[14px] ">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Popover;
