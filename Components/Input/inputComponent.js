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
}) => {
  return (
    <div className='relative'>
      {lefticon && (
        <div className='absolute left-2 top-2  px-2 py-2 ml-2 mt-2 '>
          <img src={lefticon} alt='lefticon' className='w-5 h-5' />
        </div>
      )}
      <div
        className='border
         border-gray-400 w-0 h-7 absolute top-5 left-16'
      ></div>
      <input
        className={`bg-transparent text-black rounded-2xl sm:w-96 font-semibold
         py-2 px-4 border
         border-gray-400 pl-20 mb-3`}
        style={{ width: "412px", height: "56px" }}
        type={type}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
      />

      {righticon && (
        <div className='absolute top-2 right-2  px-2 py-2 ml-2 mt-2'>
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
