// import InputComponent from "Components/Input/inputComponent";

// import React from "react";
// import { useState } from "react";
// import envelope from "../public/Assets/envelope.svg";
// import lock from "../public/Assets/lock.svg";
// import eye from "../public/Assets/eye.svg";
// import Button from "Components/Button/buttonComponent";
// import Link from "next/link";


// const EmployerLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [alignment, setAlignment] = useState("web");
//   const [displayPassword, setDisplayPassword] = useState("password");
//   const [displayConfirmPassword, setDisplayConfirmPassword] =
//   useState("password");

//   const handleChange = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };
 

// const confirmPasswordclick = () => {
//   setDisplayConfirmPassword(
//     displayConfirmPassword == "password" ? "text" : "password"
//   );
// };

        
//   const passwordclick = () => {
//     setDisplayPassword(displayPassword == "password" ? "text" : "password");
//   };
//   return (
//     <>
//       <div className="flex flex-col xl:flex-row md:flex-col  overflow-hidden min-h-screen">
//         <div className=" xl:w-1/2  md:w-full  flex flex-col justify-flex-start items-center p-6 gap-4 mt-5 sm:w-1 overflow-auto">
//           <h1 className="text-2xl font-bold text-#1E0F3B mb-4">LOGO</h1>
//           <div
//             style={{ borderRadius: "20px", backgroundColor: "#EEEFEF"}}
//             className='flex  rounded-20 transition-all duration-300 gap-4  xl:w-96 xl:h-16 md:w-96 sm:w-64 border-radius-2 p-0'
//           >
//             <button
//               style={{
//                 borderRadius: "15px",
//                 backgroundColor: alignment === "web" ? "#ffffff" : "#EEEFEF",
//                 padding: alignment === "web" ? "12px" : "12px",
//                 fontWeight: alignment === "web" ? "700": "400",
//                 margin: "5px",
              
//               }}
//               className={`${
//                 alignment === "web" ? "bg-primary" : "bg-white"
//               } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
//                 alignment === "web" ? "bg-primary" : "bg-white border-primary"
//               }  sm:w-auto md:w-1/4 lg:w-1/5`}
//               onClick={(e) => handleChange(e, "web")}
//             >
//               Employer
//             </button>
//             <button
//               style={{
//                 padding: alignment === "android" ? "12px" : "12px",
//                 borderRadius: "15px",
//                 backgroundColor:
//                   alignment === "android" ? "#ffffff" : "#EEEFEF",
//                 fontWeight: alignment === "android" ? "700": "400",
//                 margin: "5px",
               
              
//               }}
//               className={`${
//                 alignment === "android" ? "bg-primary " : "bg-white"
//               } flex-1 py-2 px-4 rounded-20 transition-all duration-300 ${
//                 alignment === "android"
//                   ? "bg-primary"
//                   : "bg-white border-primary"
//               }  sm:w-auto md:w-1/4 lg:w-1/5`}
//               onClick={(e) => handleChange(e, "android")}
//             >
//               Consultant
//             </button>
//           </div>
//           <div>
          
//             <h1 className="text-3xl font-bold text-#1E0F3B mb-4">Log In</h1>
//           </div>
//           <div>
//             <InputComponent
//               type='email'
//               value={email}
//               placeholder='Email address'
//               onchange={(e) => setEmail(e.target.value)}
//               lefticon={envelope.src}
//             />

//             <InputComponent
//               type={displayPassword}
//               value={password}
//               placeholder='Set Password'
//               lefticon={lock.src}
//               righticon={eye.src}
//               showpassword={passwordclick}
//               onchange={(e) => setPassword(e.target.value)}
//             />
//           </div>
          
//           <div className="flex justify-end">
//   <div style={{marginLeft:"280px",marginTop:"-22px"}} className="text-right">
//     <h3>Forget Password?</h3>
//   </div>
// </div>
//           <Button>Log In</Button>
//           <div className="flex items-center">
//             <hr className="flex-grow border-t-2 border-gray-300  w-24 sm:w-40 mr-5" />
//             <span className="text-black">OR</span>
//             <hr className="flex-grow border-t-2 border-gray-300 w-24 sm:w-40 ml-5" />
//           </div>
//           <div className='flex items-center justify-evenly gap-3'>
//             <img src='/Assets/googleIcon.png' alt='googleIcon' />
//             <img src='/Assets/facebookIcon.png' alt='facebookIcon' />
//             <img src='/Assets/appleIcon.png' alt='appleIcon' />
//           </div>

//           <h3>
//             Create new account?{" "}
//             <Link href='/register'>
//               <span style={{ color: "#F9342E", fontWeight: "bold" }}>
//                 Register
//               </span>
//             </Link>
//           </h3>
//         </div>
//         <div className="p-0 xl:ml-22 lg:ml-16  md:w-full xl:w-[50%]">
//       { alignment == 'web' && (
//        <img
       
//        className='xl:h-[601px] xl:w-[600px] xl:p-0 xl:ml-[95px] lg:h-[601px] lg:w-[600px]  md:w-full lg:ml-[137px] sm:ml-0 sm:pl-0  sm:w-full mx-auto md:w-[750px] md:h-[750px]'
//        src="/Assets/employerLoginimg.png"
//        alt="Employer Login Image"
//      />
//       ) }  
//       {
//         alignment !== 'web' && (
//           <img
//        style={{
//         height: "650px",
//        }}
//        className=" md:w-full lg:w-full  xl:w-11/12 mx-auto md:mx-0"
//        src="/Assets/consultantimg.png"
//        alt="Employer Login Image"
//      />
       
//         )
//       }

//         </div>
//       </div>
//     </>
//   );
// };

// export default EmployerLogin;
import React from 'react'

const EmployerLogin = () => {
  return (
    
    <div>EmployerLogin</div>
  )
}

export default EmployerLogin