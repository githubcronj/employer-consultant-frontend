import InputComponent from "Components/Input/inputComponent";
import buttonComponent from "Components/Button/buttonComponent";
import React from "react";
import { useState } from "react";
import { envelope } from "../public/Assets/envelope.svg";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import Button from "Components/Button/buttonComponent";
const EmployerLogin = () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div className="flex h-screen ">
        <div className="w-full md:w-1/2  flex flex-col justify-flex-start items-center p-6 gap-8">
          <h1 className="text-2xl font-bold text-indigo-900 mb-4">LOGO</h1>
          <div
            style={{ borderRadius: "20px", backgroundColor: "#EEEFEF" }}
            className="flex  rounded-20 transition-all duration-300 gap-4 w-100% border-radius-2 p-0"
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
          
            <h1 className="text-3xl font-bold text-indigo-900 mb-4">Log In</h1>
          </div>
          <div>
            <InputComponent placeholder="Email address" icon={envelope} />
          </div>
          <div>
            <InputComponent placeholder="Password" icon={envelope} />
          </div>
          <div
            sx={{ display: "flex", justifyContent: "flex-end", float: "right" }}
          >
            <Typography>Forget Password?</Typography>
          </div>

          <Button>Log In</Button>
          <div className="flex items-center">
            <hr className="flex-grow border-t-2 border-gray-300 w-48 mr-5" />
            <span className="text-black">OR</span>
            <hr className="flex-grow border-t-2 border-gray-300 w-48 ml-5" />
          </div>
          <div className="flex items-center justify-evenly gap-3">
            <img src="/Assets/googleIcon.png" alt="googleIcon" />
            <img src="/Assets/facebookIcon.png" alt="facebookIcon" />
            <img src="/Assets/appleIcon.png" alt="appleIcon" />
          </div>

          <Typography>
            Create new account?{" "}
            <span style={{ color: "#F9342E", fontWeight: "bold" }}>
              Register
            </span>
          </Typography>
        </div>
        <div className="w-full md:w-1/2 p-1">
          <img
          className="bigimg"
            src="/Assets/employerLoginimg.png"
           
            alt="Employer Login Image"
           
          />
        </div>
      </div>
    </>
  );
};

export default EmployerLogin;
