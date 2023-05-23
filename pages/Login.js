import { useState } from "react";
import Button from "../Components/Button/buttonComponent";
import InputComponent from "../Components/Input/inputComponent";
import envelope from "../public/Assets/envelope.svg";
import lock from "../public/Assets/lock.svg";
import eye from "../public/Assets/eye.svg";
import Link from "next/link";
const Login = () => {
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
    className='flex flex-col  xl:flex-row xl:items-center justify-evenly md:flex-col  overflow-hidden min-h-screen'
    style={{ marginLeft: "38px", marginTop: "0px" }}
  >
    <div className='flex flex-col items-center justify-center gap-5'>
      <div
        style={{ marginTop: "20px" }}
        className=' xl:w-1/2  md:w-full  flex flex-col justify-flex-start items-center pt-0 ml-2 gap-4 sm:w-1'
      >
        <h1
          className='text-2xl font-bold text-#1E0F3B mb-1 ml-6'
          style={{ width: "72px", height: "29px", fontSize: "24px" }}
        >
          LOGO
        </h1>
        <div
        
          style={{
            borderRadius: "20px",
            marginTop:"20px",
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
          placeholder='Password'
          lefticon={lock.src}
          righticon={eye.src}
          showpassword={passwordclick}
          onchange={(e) => setPassword(e.target.value)}
        />
     <div className="flex justify-end">
  <div style={{marginLeft:"280px",}} className="text-right">
    <h3>Forget Password?</h3>
  </div>
</div>
    
<div style={{marginTop:"20px"}}>
<Button>Log In</Button>
</div>
       
      </div>

      <div
        className='flex items-center pl-10 mt-3 '
        style={{ width: "412px" }}
      >
        <hr className='flex-grow border-t-2 border-gray-300 w-40 mr-5' />
        <span className='text-black'>OR</span>
        <hr className='flex-grow border-t-2 border-gray-300 w-40 ml-5' />
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
      className='w-1/2 p-0 ml-16'
      style={{ width: "50%", objectFit: "contain" }}
    >
      {alignment == "web" && (
        <img
       style={{
        height: "650px",
       }}
       className=" md:w-full lg:w-full  xl:w-11/12 mx-auto md:mx-0"
       src="/Assets/employerLoginimg.png"
       alt="Employer Login Image"
     />
      )}
      {alignment != "web" && (
        <img
        style={{
         height: "650px",
        }}
        className=" md:w-full lg:w-full  xl:w-11/12 mx-auto md:mx-0"
        src="/Assets/consultantimg.png"
        alt="Employer Login Image"
      />
       
      )}
    </div>
  </div>
  )
}

export default Login