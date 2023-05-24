import React, { useState } from "react";
import InputComponent from "Components/Input/inputComponent";
import Button from "Components/Button/buttonComponent";
function home() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
   setIsOpen(false);
  };
  return (
    <>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={openModal}
      >
        Open Modal
      </button>
      {isOpen && (
        <div className='fixed inset-0 flex flex-col items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-100 opacity-50 flex flex-col'></div>

          <h3>Please enter the OTP</h3>
          <input
            type='text'
            placeholder='OTP'
            style={{
              border: "2px solid black",
              width: "200px",
              height: "40px",
              borderRadius: "8px",
            }}
          />
          <button
            className='mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={closeModal}
          >
            Confirm
          </button>
        </div>
      )}
    </>
  );
}

export default home;
