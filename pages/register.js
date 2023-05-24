import React from "react";
import { useState } from "react";
import Button from "../Components/Button/buttonComponent";
import InputComponent from "../Components/Input/inputComponent";
import envelope from "../public/Assets/envelope.svg";
import lock from "../public/Assets/lock.svg";
import eye from "../public/Assets/eye.svg";
import closedeye from "../public/Assets/closedeye.svg";
import Link from "next/link";
import styles from "../styles/LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerReducer } from "../store/reducer/registerReducer";
import { REGISTER_REQUEST } from "store/type/registerType";
import validator from "validator";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [role, setRole] = useState("employer");
  const [alignment, setAlignment] = useState("web");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState("password");
  const [displayConfirmPassword, setDisplayConfirmPassword] =
    useState("password");
  const [success, setSuccess] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [iconsetone, setIconsetOne] = useState(false);
  const [iconsettwo, setIconsetTwo] = useState(false);
  const data = useSelector((state) =>
    console.log(state.registerReducer?.data?.status)
  );

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment == "android") {
      setRole("consultant");
    } else {
      setRole("employer");
    }
  };
  const confirmPasswordclick = () => {
    setDisplayConfirmPassword(
      displayConfirmPassword == "password" ? "text" : "password"
    );
    setIconsetTwo(!iconsettwo);
  };
  const passwordclick = () => {
    setDisplayPassword(displayPassword == "password" ? "text" : "password");
    setIconsetOne(!iconsetone);
  };
  const emailclicked = (e) => {
    setEmail(e.target.value);
  };
  const registerClicked = () => {
    let isEmailValid = validator.isEmail(email);

    let isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

    if (!isEmailValid) {
      setEmailErr("please enter valid email");
    } else {
      setEmailErr("");
    }

    if (!isPasswordValid) {
      setPasswordErr("please enter a valid password");
    } else {
      setPasswordErr("");
    }
    if (password === confirmPassword) {
      if (isEmailValid && isPasswordValid) {
        //,role: "employer"
        const payload = { email, password, role };
        dispatch({ type: REGISTER_REQUEST, payload });

        setIsOpen(true);
      }
    } else {
      setConfirmPasswordErr("Passwords does not match");
    }
  };
  const otpconfirm = () => {
    setIsOpen(false);
    7;
    router.push("/Login");
  };

  return (
    <>
      <div
        className={`max-w-[1536px] xl:-mt-4  mx-auto flex flex-col  xl:flex-row xl:items-center justify-center lg:flex-row 
        lg:items-center lg:justify-center md:flex-col
         lg:gap-12 xl:gap-0 h-[100%] lg:h-auto ${styles.desk}`}
      >
        <div className='xl:mt-0  flex flex-col items-center justify-center align-middle sm:pl-0  sm:mr-[2px] md:mr-[2px] mb-3 xl:-mb-7 flex-1 '>
          <div
            style={{ marginTop: "20px" }}
            className=' xl:w-1/2  md:w-full -ml-[36px] xl:ml-[0px] flex flex-col justify-center items-center pt-0  gap-4 '
          >
            <h1
              className='text-2xl font-bold text-#1E0F3B mb-1 xl:-mt-1 xl:-mb-5 xl:ml-6 lg:ml-6'
              style={{ width: "72px", height: "29px", fontSize: "24px" }}
            >
              LOGO
            </h1>
            <div
              style={{
                marginTop: "15px",
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
              <h1 className='text-3xl font-bold text-black pb-4 ml-2 xl:-mt-2 xl:-mb-2'>
                REGISTER
              </h1>
            </div>
          </div>

          <div className='xl:pl-10 lg:pl-10 relative'>
            <InputComponent
              type='email'
              value={email}
              placeholder='Email address'
              onchange={(e) => emailclicked(e)}
              lefticon={envelope.src}
              emailstyle={emailErr ? true : false}
            />
            {emailErr && (
              <h6
                variant='h6'
                className='text-red-500 absolute top-[54px] left-[40px]'
              >
                {emailErr}
              </h6>
            )}

            <InputComponent
              type={displayPassword}
              value={password}
              placeholder='Set Password'
              lefticon={lock.src}
              righticon={iconsetone ? eye.src : closedeye.src}
              showpassword={passwordclick}
              onchange={(e) => setPassword(e.target.value)}
              passwordstyle={passwordErr ? true : false}
            />
            {passwordErr && (
              <h6
                variant='h6'
                className='text-red-500 absolute top-[134px] left-[40px] w-[620px]'
              >
                {passwordErr}
              </h6>
            )}
            <InputComponent
              type={displayConfirmPassword}
              value={confirmPassword}
              placeholder='Confirm Password'
              lefticon={lock.src}
              righticon={iconsettwo ? eye.src : closedeye.src}
              showpassword={confirmPasswordclick}
              onchange={(e) => setConfirmPassword(e.target.value)}
              confirmpasswordstyle={confirmPasswordErr ? true : false}
            />
            {confirmPasswordErr && (
              <h6
                variant='h6'
                className='text-red-500 absolute top-[214px] left-[40px] w-[620px]'
              >
                {confirmPasswordErr}
              </h6>
            )}
            <Button onClick={registerClicked}>Register</Button>
          </div>

          <div
            className='flex items-center xl:pl-10 lg:pl-10 mt-3 sm:w-96'
            style={{ width: "435px" }}
          >
            <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 mr-5' />
            <span className='text-black'>OR</span>
            <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 ml-5' />
          </div>
          <div className='flex items-center ml-0 gap-5 mt-3 '>
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

          <h3 className='ml-9 mt-4 '>
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

        <div className='hidden m-0 lg:flex p-0 md:w-full max-w-[600px] xl:max-w-[720px] lg:h-[100vh] xl:h-[100vh]  xl:m-0 xl:p-0 '>
          {alignment == "web" && (
            <img
              src='/Assets/employerLoginimg.png'
              alt='Employer Login Image'
              className='object-cover h-full '
            />
          )}
          {alignment != "web" && (
            <img
              src='/Assets/consultantimg.png'
              alt='Employer Login Image'
              className='object-cover h-full '
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div
            className='absolute inset-0 bg-black opacity-70
 backdrop-opacity-100'
          ></div>

          <div className='bg-white h-[180px] p-6 rounded shadow-xl relative flex flex-col items-center'>
            <h3 className='text-xl font-bold mb-4'>Please enter the OTP</h3>
            <input
              type='text'
              placeholder='OTP'
              style={{
                border: "2px solid black",
                width: "250px",
                height: "40px",
                borderRadius: "8px",
              }}
            />

            <button
              className='mt-4 bg-white text-black font-bold py-2 px-4 rounded p-1 absolute bottom-0 left-0 m-3 mt-8'
              style={{ border: "2px solid black" }}
              onClick={closeModal}
            >
              cancel
            </button>

            <button
              className='mt-4 bg-white text-black font-bold py-2 px-4 rounded absolute p-1 bottom-0 left-[84px] m-3'
              style={{ border: "2px solid black" }}
            >
              Resend
            </button>

            <button
              className='mt-4 bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded absolute bottom-0 right-0 m-3'
              onClick={otpconfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
