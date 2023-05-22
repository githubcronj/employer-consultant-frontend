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
        <div className="w-1/2 flex flex-col justify-center items-center p-6 gap-8">
          <h1 className="text-2xl font-bold text-indigo-900 mb-4">LOGO</h1>
          <div style={{borderRadius:"20px",
        backgroundColor:"#EEEFEF"}} className="flex overflow-hidden rounded-20 transition-all duration-300 gap-4 w-100% border-radius-2 p-0"
>
  <button
    style={{
      
      borderRadius: "15px",
      backgroundColor: alignment === 'web' ? '#ffffff' : '#EEEFEF',
      padding:alignment === 'web' ? '12px' : '12px',
      fontWeight: "700",
      margin:"5px",
      width:"200px"
    }}
    className={`${
      alignment === 'web'
        ? 'bg-primary'
        : 'bg-white'
    } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
      alignment === 'web' ? 'bg-primary' : 'bg-white border-primary'
    }`}
    onClick={(e) => handleChange(e, 'web')}
  >
    Employer
  </button>
  <button
    style={{
    padding:alignment === 'android' ? '12px' : '12px',
      borderRadius: "15px",
      backgroundColor: alignment === 'android' ? '#ffffff' : '#EEEFEF',
      fontWeight: "700",
      margin:"5px",
      width:"200px"
    }}
    className={`${
      alignment === 'android'
        ? 'bg-primary '
        : 'bg-white'
    } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
      alignment === 'android' ? 'bg-primary' : 'bg-white border-primary'
    }`}
    onClick={(e) => handleChange(e, 'android')}
  >
   Consultant
  </button>
</div>
<div> <h1 className="text-3xl font-bold text-indigo-900 mb-4">Log In</h1></div>

        </div>
        <div className="w-1/2 p-1">
          <img
            src="/Assets/employerLoginimg.png"
            width={"680px"}
            height={"600px"}
            alt="Employer Login Image"
            className=" fixed"
          />
        </div>
      </div>
    </>
  );
};

export default EmployerLogin;
