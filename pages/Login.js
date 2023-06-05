import React, { useEffect } from "react";
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
import validator from "validator";
import { useRouter } from "next/router";
import { login, googleLogin } from "../store/action/loginaction";
import { facebookLogin } from "store/action/fbAction";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log("🚀 ~ file: Login.js:20 ~ Login ~ session:", session);
  const router = useRouter();
  const dispatch = useDispatch();
  const [role, setRole] = useState("employer");
  const [alignment, setAlignment] = useState("web");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [displayPassword, setDisplayPassword] = useState("password");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [iconsetone, setIconsetOne] = useState(false);

  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment == "android") {
      setRole("consultant");
      localStorage.setItem("role", "consultant");
    } else {
      setRole("employer");
      localStorage.setItem("role", "employer");
    }
  };
  useEffect(() => {
    localStorage.setItem('role', 'employer');
  }, []);

  const passwordclick = () => {
    setDisplayPassword(displayPassword == "password" ? "text" : "password");
    setIconsetOne(!iconsetone);
  };
  const emailclicked = (e) => {
    setEmail(e.target.value);
  };
  const handleLogin = () => {
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
    const payload = {
      email: email,
      password: password,
      role: role,
    };

    dispatch(login(payload));
  };
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/profile");
    }
  }, [isLoggedIn, router]);

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    const callbackUrl = "/googleAuth";
    await signIn("google", { role, callbackUrl });
  };
  const facebookClick = () => {
    dispatch({ type: facebookLogin });

    window.open(
      `${process.env.NEXT_PUBLIC_BASE_URL}/facebook/callback`,
      '_self'
    );
  };

  return (
    <>
      <div
        className={`max-w-[1536px]   mx-auto flex flex-col  xl:flex-row xl:items-center justify-center lg:flex-row
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
                marginTop: "25px",
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
                Log In
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

            <Link href='/forgotPassword'>
              <h3 className='w-full text-right text-[#2B373C] text-[13px] mb-4 font-bold tracking-[0.13px] '>
                Forgot Password?
              </h3>
            </Link>
            <Button onClick={handleLogin}>Login</Button>
          </div>

          <div
            className='flex items-center xl:pl-10 lg:pl-10 mt-3 sm:w-96'
            style={{ width: "435px" }}
          >
            <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 mr-5' />
            <span className='text-black'>OR</span>
            <hr className='flex-grow border-t-2 border-gray-300 w-24 sm:w-40 ml-5' />
          </div>
          <div className='flex items-center ml-0 gap-5 mt-3 xl:pl-10 lg:pl-10 '>
            <div>
              <img
                src='/Assets/googleIcon.png'
                alt='googleIcon'
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                onClick={handleGoogleLogin}
              />
            </div>

            <img
              src='/Assets/facebookIcon.png'
              alt='facebookIcon'
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
              // onClick={facebookClick}
              onClick={() =>
                signIn("facebook", { callbackUrl: "/googleAuth", role })
              }
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

        {alignment == "web" && (
          <div
            className={`hidden m-0 lg:flex p-0 md:w-full max-w-[600px] xl:max-w-[720px] lg:h-[100vh] xl:h-[100vh]  xl:m-0 xl:p-0 ${styles.loginimgbg}`}
          ></div>
        )}
        {alignment != "web" && (
          <div
            className={`hidden m-0 lg:flex p-0 md:w-full max-w-[600px] xl:max-w-[720px] lg:h-[100vh] xl:h-[100vh]  xl:m-0 xl:p-0 ${styles.loginimgbg2}`}
          ></div>
        )}
      </div>
    </>
  );
};

export default Login;
