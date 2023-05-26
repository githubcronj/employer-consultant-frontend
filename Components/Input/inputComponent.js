import React, { useEffect } from "react";
import { useState } from "react";
import validator from "validator";

const InputComponent = ({
  type,
  value,
  onchange,
  placeholder,
  lefticon,
  righticon,
  showpassword,
}) => {
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setIsBlurred(false);
    validation();
  };
  const validation = () => {
    if (type == "email") {
      setIsValid(validator.isEmail(value));
    } else if (type == "password" || "text") {
      setIsValid(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value)
      );
    }
  };
  const handleBlur = () => {
    setIsFocused(false);
    setIsBlurred(true);
    validation();
  };
  const inputStyle = {
    border:
      isFocused || isBlurred
        ? isValid
          ? "1px solid rgb(0,0,255)	"
          : "1px solid red"
        : "1px solid black",
  };
  return (
    <div className='relative mb-3'>
      {lefticon && (
        <div className='absolute left-2 top-0.5  px-2 py-2 ml-2 mt-2 '>
          <img src={lefticon} alt='lefticon' className='w-5 h-5' />
        </div>
      )}
      <div
        className='border
         border-gray-300 w-0 h-9 absolute top-[10px] left-16'
      ></div>
      <input
        className={`bg-transparent text-black rounded-2xl  font-semibold
       py-2 px-4 
       pl-20 mb-3`}
        style={{
          height: "56px",
          width: "412px",
          border: inputStyle.border,
        }}
        type={type}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

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
