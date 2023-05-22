import React from "react";

const Button = ({ children, onClick, className }) => {

    return (
        <>
          <button className={`bg-transparent hover:bg-red-500 text-white-200 font-semibold py-2 px-4 border
             border-blue-500 hover:border-transparent rounded`} 
             onClick={onClick}
            >
  {children}
</button>
        </>
    )

}
export default Button;