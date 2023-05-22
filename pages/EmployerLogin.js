import React from 'react';
import { useState } from 'react';

const EmployerLogin = () => {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 flex flex-col justify-center items-center p-6">
          <h1 className="text-2xl font-bold text-indigo-900 mb-4">LOGO</h1>
          <div className="flex overflow-hidden rounded-10 transition-all duration-300 gap-4">
            <button
              className={`${
                alignment === 'web'
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary'
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300`}
              onClick={(e) => handleChange(e, 'web')}
            >
              Web
            </button>
            <button
              className={`${
                alignment === 'android'
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary'
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300`}
              onClick={(e) => handleChange(e, 'android')}
            >
              Android
            </button>
          </div>
        </div>
        <div className="w-1/2 p-6 bg-gray-300">
          <img
            src="/Assets/employerLoginimg.png"
            alt="Employer Login Image"
            className="h-800 w-700 fixed"
          />
        </div>
      </div>
    </>
  );
};

export default EmployerLogin;
