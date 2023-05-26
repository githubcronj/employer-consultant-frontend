import React from "react";

const InputComponent = ({
  type,
  value,
  onchange,
  placeholder,
  lefticon,
  righticon,
  className,
  showpassword,
  emailstyle,
  passwordstyle,
  confirmPasswordstyle,
}) => {
  return (
    <div className='relative mb-3'>
      {lefticon && (
        <div className='absolute left-2 top-0.5  px-2 py-2 ml-2 mt-2 '>
          <img src={lefticon} alt='lefticon' className='w-5 h-5'/>
        </div>
      )}
      <div
        className='border
         border-gray-300 w-0 h-9 absolute top-[10px] left-16'
      ></div>
      {(emailstyle || passwordstyle || confirmPasswordstyle) && (
        <input
          className={`bg-transparent text-black rounded-2xl sm:w-96 font-semibold
       py-2 px-4 border
       border-red-500 pl-20 mb-3 `}
          style={{
            width: "412px",
            height: "56px",
           
          }}
          type={type}
          value={value}
          onChange={onchange}
          placeholder={placeholder}
        />
      )}
      {!(emailstyle || passwordstyle || confirmPasswordstyle) && (
        <input
          className={`bg-transparent text-black rounded-2xl sm:w-96 font-semibold
         py-2 px-4 border
         border-gray-400 pl-20 mb-3 `}
          style={{
            width: "412px",
            height: "56px",
          }}
          type={type}
          value={value}
          onChange={onchange}
          placeholder={placeholder}
        />
      )}
      {righticon && (
        <div className='absolute top-0.5 right-2  px-2 py-2 ml-2 mt-2'>
          <img
            src={righticon}
            alt='rightIcon'
            className='w-5 h-5'
            onClick={showpassword}
          />
        </div>
      )}
    </div>
  );
};
export default InputComponent;
