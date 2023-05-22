import React from "react";
import { useState } from "react";
import Button from "../Components/Button/buttonComponent";
import InputComponent from "../Components/Input/inputComponent";
import envelope from "../public/Assets/envelope.svg";
import lock from "../public/Assets/lock.svg";
import eye from "../public/Assets/eye.svg";

const Register = () => {
  const [alignment, setAlignment] = useState("web");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState("password");
  const [displayConfirmPassword, setDisplayConfirmPassword] =
    useState("password");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const confirmPasswordclick = () => {
    setDisplayConfirmPassword(
      displayConfirmPassword == "password" ? "text" : "password"
    );
  };
  const passwordclick = () => {
    setDisplayPassword(displayPassword == "password" ? "text" : "password");
  };
  return (
    <div
      className='flex items-start justify-center'
      style={{ height: "900px" }}
    >
      <div className='flex flex-col items-center pr-10 pt-2'>
        <div className='w-1/2 flex flex-col justify-center items-center p-2 gap-4 pl-10'>
          <h1 className='text-2xl font-bold text-black mb-2'>LOGO</h1>
          <div
            style={{ borderRadius: "20px", backgroundColor: "#EEEFEF" }}
            className='flex overflow-hidden rounded-20 transition-all duration-300 gap-4 w-100% border-radius-2 p-0'
          >
            <button
              style={{
                borderRadius: "15px",
                backgroundColor: alignment === "web" ? "#ffffff" : "#EEEFEF",
                padding: alignment === "web" ? "12px" : "12px",
                fontWeight: "700",
                margin: "5px",
                width: "200px",
              }}
              className={`${
                alignment === "web" ? "bg-primary" : "bg-white"
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
                alignment === "web" ? "bg-primary" : "bg-white border-primary"
              }`}
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
                fontWeight: "700",
                margin: "5px",
                width: "200px",
              }}
              className={`${
                alignment === "android" ? "bg-primary " : "bg-white"
              } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
                alignment === "android"
                  ? "bg-primary"
                  : "bg-white border-primary"
              }`}
              onClick={(e) => handleChange(e, "android")}
            >
              Consultant
            </button>
          </div>
          <div>
            
            <h1 className='text-3xl font-bold text-black pb-2 '>Register</h1>
          </div>
        </div>

        <div className='pl-10'>
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
            placeholder='Set Password'
            lefticon={lock.src}
            righticon={eye.src}
            showpassword={passwordclick}
            onchange={(e) => setPassword(e.target.value)}
          />

          <InputComponent
            type={displayConfirmPassword}
            value={confirmPassword}
            placeholder='Confirm Password'
            lefticon={lock.src}
            righticon={eye.src}
            showpassword={confirmPasswordclick}
            onchange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button>Register</Button>
        </div>

        <div className='flex items-center w-96 pl-10 mt-4 '>
          <hr className='flex-grow border-t-2 border-gray-300 w-48 mr-5' />
          <span className='text-black'>OR</span>
          <hr className='flex-grow border-t-2 border-gray-300 w-48 ml-5' />
        </div>
        <div className='flex items-center  ml-10 gap-5 mt-4 '>
          <img src='/Assets/googleIcon.png' alt='googleIcon' />
          <img src='/Assets/facebookIcon.png' alt='facebookIcon' />
          <img src='/Assets/appleIcon.png' alt='appleIcon' />
        </div>

        <h3 className='ml-9 mt-5'>
          Already have account?
          <span
            style={{ color: "#F9342E", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => console.log("signup clicked")}
            className='pl-4'
          >
            Log In
          </span>
        </h3>
      </div>

      <div className='w-1/2 p-1'>
        {alignment == "web" && (
          <img
            src='/Assets/employerLoginimg.png'
            width={"680px"}
            height={"600px"}
            alt='Employer Login Image'
            className=' fixed'
          />
        )}
        {alignment != "web" && (
          <img
            src='/Assets/consultantimg.png'
            width={"680px"}
            height={"600px"}
            alt='Employer Login Image'
            className=' fixed'
          />
        )}
      </div>
    </div>
  );
};
export default Register;
