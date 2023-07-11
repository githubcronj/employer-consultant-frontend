import React, { useState } from "react";
import ChatComponent from "Components/ChatComponent/AppliedChat";
const Chatover = ({ children, onClick, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
 
    </div>
  );
};

export default Chatover;
