import InputComponent from 'Components/Input/inputComponent';

import React from 'react';
import { useState } from 'react';
import envelope from '../public/Assets/envelope.svg';
import lock from '../public/Assets/lock.svg';
import eye from '../public/Assets/eye.svg';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import Button from 'Components/Button/buttonComponent';
import Link from 'next/link';

const EmployerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div className="flex flex-col  xl:flex-row md:flex-col">
        <div className=" xl:w-1/2  md:w-full  flex flex-col justify-flex-start items-center p-6 gap-8 mt-5 sm:w-1">
          <h1 className="text-2xl font-bold text-#1E0F3B mb-4">LOGO</h1>
          <div
            style={{ borderRadius: '20px', backgroundColor: '#EEEFEF' }}
            className="flex  rounded-20 transition-all duration-300 gap-4 w-100% border-radius-2 p-0"
          >
            <button
              style={{
                borderRadius: "15px",
                backgroundColor: alignment === "web" ? "#ffffff" : "#EEEFEF",
                padding: alignment === "web" ? "12px" : "12px",
                fontWeight: alignment === "web" ? "700": "400",
                margin: "5px",
               width:"140px"
              }}
              className={`${
                alignment === 'web' ? 'bg-primary' : 'bg-white'
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
                alignment === 'web' ? 'bg-primary' : 'bg-white border-primary'
              }  sm:w-auto md:w-1/4 lg:w-1/5`}
              onClick={(e) => handleChange(e, 'web')}
            >
              Employer
            </button>
            <button
              style={{
                padding: alignment === 'android' ? '12px' : '12px',
                borderRadius: '15px',
                backgroundColor:
                  alignment === "android" ? "#ffffff" : "#EEEFEF",
                fontWeight: alignment === "android" ? "700": "400",
                margin: "5px",
                width:"140px"
              
              }}
              className={`${
                alignment === 'android' ? 'bg-primary ' : 'bg-white'
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
                alignment === 'android'
                  ? 'bg-primary'
                  : 'bg-white border-primary'
              }  sm:w-auto md:w-1/4 lg:w-1/5`}
              onClick={(e) => handleChange(e, 'android')}
            >
              Consultant
            </button>
          </div>
          <div>
          
            <h1 className="text-3xl font-bold text-#1E0F3B mb-4">Log In</h1>
          </div>
          <div>
            <InputComponent
              type="email"
              value={email}
              placeholder="Email address"
              onchange={(e) => setEmail(e.target.value)}
              lefticon={envelope.src}
            />

            <InputComponent
              type="password"
              value={password}
              placeholder="Set Password"
              lefticon={lock.src}
              righticon={eye.src}
              onchange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Typography className="text-right">Forget Password?</Typography>
          </div>

          <Button>Log In</Button>
          <div className="flex items-center">
            <hr className="flex-grow border-t-2 border-gray-300  w-24 sm:w-48 mr-5" />
            <span className="text-black">OR</span>
            <hr className="flex-grow border-t-2 border-gray-300 w-24 sm:w-48 ml-5" />
          </div>
          <div className="flex items-center justify-evenly gap-3">
            <img src="/Assets/googleIcon.png" alt="googleIcon" />
            <img src="/Assets/facebookIcon.png" alt="facebookIcon" />
            <img src="/Assets/appleIcon.png" alt="appleIcon" />
          </div>

          <Typography>
            Create new account?{' '}
            <Link href="/register">
              <span style={{ color: '#F9342E', fontWeight: 'bold' }}>
                Register
              </span>
            </Link>
          </Typography>
        </div>
        <div className="  xl:w-1/2 md:w-full p-1">
        <img
  className="bigimg h-auto w-full bg-fixed"
  src="/Assets/employerLoginimg.png"
  alt="Employer Login Image"
/>

        </div>
      </div>
    </>
  );
};

export default EmployerLogin;
