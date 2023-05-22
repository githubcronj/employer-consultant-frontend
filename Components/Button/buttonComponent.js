import React from 'react';

const Button = ({ children, onClick, className,width }) => {
  
  return (
    <>
      <button
        className="bg-red-500 text-white-200 font-semibold py-2 px-4 border
         border-red-500 h-16  w-full sm:w-96 rounded-2xl text-white	"
        onClick={onClick}
        width="auto"
      >
        {children}
      </button>
    </>
  );
};
export default Button;
