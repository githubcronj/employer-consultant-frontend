import React from "react";
import { useState } from "react";
import Button from "../Components/Button/buttonComponent";
import InputComponent from "../Components/Input/inputComponent";
import envelope from "../public/Assets/envelope.svg";
import lock from "../public/Assets/lock.svg";
import eye from "../public/Assets/eye.svg";
import Link from "next/link";
import styles from "../styles/LoginPage.module.css";
const Register = () => {
  const [alignment, setAlignment] = useState("web");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState("password");
 
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const passwordclick = () => {
    setDisplayPassword(displayPassword == "password" ? "text" : "password");
  };
  return (
    <div
      className={`flex flex-col  xl:flex-row xl:items-center justify-center lg:flex-row lg:items-center lg:justify-center md:flex-col ${styles.mainBox}`}
     
    >
      <div className='flex flex-col items-center justify-center sm:pl-0  sm:mr-[2px] md:mr-[2px] mb-3'>
        <div
          style={{ marginTop: "20px" }}
          className=' xl:w-1/2  md:w-full   flex flex-col justify-center items-center pt-0  gap-4 '
        >
          <h1
            className='text-2xl font-bold text-#1E0F3B mb-1 xl:ml-6 lg:ml-6'
            style={{ width: "72px", height: "29px", fontSize: "24px" }}
          >
            LOGO
          </h1>
          <div
            style={{
                marginTop:"15px",
              borderRadius: "20px",
              backgroundColor: "#EEEFEF",
              width: "412px",
              height: "60px",
            }}
            className='flex  rounded-20 transition-all duration-300 ml-8 gap-3  border-radius-2 pl-1'
          >
            <button
              style={{
                borderRadius: "15px",
                backgroundColor: alignment === "web" ? "#ffffff" : "#EEEFEF",
                padding: alignment === "web" ? "12px" : "12px",
                fontWeight: alignment === "web" ? "700" : "400",
                margin: "5px",
                width: "140px",
              }}
              className={`${
                alignment === "web" ? "bg-primary" : "bg-white"
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
                alignment === "web" ? "bg-primary" : "bg-white border-primary"
              }  sm:w-auto md:w-1/4 lg:w-1/5`}
              onClick={(e) => handleChange(e, "web")}
            >
              Employer
            </button>
            <button
              style={{
                padding: alignment === "android" ? "12px" : "12px",
                borderRadius: "15px",
                backgroundColor:
                  alignment === "android" ? "#ffffff" : "#EEEFEF",
                fontWeight: alignment === "android" ? "700" : "400",
                margin: "5px",
                width: "140px",
              }}
              className={`${
                alignment === "android" ? "bg-primary " : "bg-white"
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
                alignment === "android"
                  ? "bg-primary"
                  : "bg-white border-primary"
              }  sm:w-auto md:w-1/4 lg:w-1/5`}
              onClick={(e) => handleChange(e, "android")}
            >
              Consultant
            </button>
          </div>

          <div>
            <h1 className='text-3xl font-bold text-black pb-4 ml-2 '>
            Log In
            </h1>
          </div>
        </div>

        <div className='xl:pl-10 lg:pl-10'>
          <InputComponent
            type='email'
            value={email}
            placeholder='Email address'
            onchange={(e) => setEmail(e.target.value)}
            lefticon={envelope.src}
          />

          <InputComponent
            type={displayPassword}
            value={password}
            placeholder='Password'
            lefticon={lock.src}
            righticon={eye.src}
            showpassword={passwordclick}
            onchange={(e) => setPassword(e.target.value)}
          />

<div className="flex justify-end">
  <div style={{marginLeft:"280px" , marginTop:"-10px",fontWeight:"bold"}} className="text-right">
    <h3>Forget Password?</h3>
  </div>
</div>
              <div style={{marginTop:"15px"}}>
              <Button>Log In</Button>
              </div>
         
        </div>

        <div
          className='flex items-center xl:pl-10 lg:pl-10 mt-3 sm:w-96'
          style={{ width: "435px" }}
        >
          <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 mr-5' />
          <span className='text-black'>OR</span>
          <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 ml-5' />
        </div>
        <div className='flex items-center  ml-10 gap-5 mt-3 '>
          <img
            src='/Assets/googleIcon.png'
            alt='googleIcon'
            style={{ width: "50px", height: "50px" }}
          />
          <img
            src='/Assets/facebookIcon.png'
            alt='facebookIcon'
            style={{ width: "50px", height: "50px" }}
          />
          <img
            src='/Assets/appleIcon.png'
            alt='appleIcon'
            style={{ width: "50px", height: "50px" }}
          />
        </div>

        <h3 className='ml-9 mt-4'>
          Already have account?
          <Link href='/register'>
            <span
              style={{
                color: "#F9342E",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => console.log("signup clicked")}
              className='pl-4'
            >
              Register
            </span>
          </Link>
        </h3>
      </div>

      <div
        className=' p-0 xl:ml-22 lg:ml-16  md:w-full xl:w-[50%] '
        style={{ objectFit: "contain" }}
      >
        {alignment == "web" && (
          <img
            src='/Assets/employerLoginimg.png'
            alt='Employer Login Image'
            className='xl:h-[601px] xl:w-[600px] xl:p-0 xl:ml-[95px] lg:h-[601px] lg:w-[600px]  md:w-full lg:ml-[137px] sm:ml-0 sm:pl-0  sm:w-full mx-auto md:w-[750px] md:h-[750px]'
          />
        )}
        {alignment != "web" && (
          <img
            src='/Assets/consultantimg.png'
            alt='Employer Login Image'
            className='xl:h-[601px] xl:w-[600px] xl:p-0 xl:ml-[95px] lg:h-[601px] lg:w-[600px]  md:w-full lg:ml-[137px] sm:ml-0 sm:pl-0  sm:w-full mx-auto md:w-[750px] md:h-[750px]'
          />
        )}
      </div>
    </div>
  );
};
export default Register;