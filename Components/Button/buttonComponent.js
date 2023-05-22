import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <>
      <button
        className="bg-red-500 text-white-200 font-semibold py-2 px-4 border
         border-red-500 h-16 w-96 rounded-2xl text-white	"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
