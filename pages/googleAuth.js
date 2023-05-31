import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { put } from "redux-saga/effects";
import { googleLoginRedirectAction } from "../store/action/loginaction";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

<<<<<<< HEAD
import { put } from 'redux-saga/effects';
import { googleLogin } from '../store/action/loginaction';

import { Typography } from '@mui/material';
const googleAuth = () => {
=======
>>>>>>> 55a6df321b3ce1b6af47f97d1b0391f55e84b8da

const GoogleAuth = () => {

  const router = useRouter();

  const { data: session } = useSession()
 
  const setUserData = async() =>{
    if (!session) {
      // Session data is not available yet, handle it accordingly
      return;
    }
try{


    const nameParts = session.user.name.split(" ");
    const payload={
      role:localStorage.getItem("role"),
      email:session?.user?.email,
      firstName:nameParts[0] ,
      lastName: nameParts[1]
    }
      const response = await fetch('http://localhost:3001/auth/login/success', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
      )

      router.push("/profile")
    }
    catch(error){
      console.log(error)
    }

    
    }
    
  
<<<<<<< HEAD
    const router = useRouter();
    

    useEffect(() => {
      const role = localStorage.getItem("role")
      
    const payload = {
  role:role,
    };
   
      dispatch(googleLogin(payload));
      router.push('/profile');
    }, [dispatch,router]);
=======
  useEffect(()=>{
    setUserData()
  },[session])




>>>>>>> 55a6df321b3ce1b6af47f97d1b0391f55e84b8da
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2">Google Auth Checking....</Typography>
    </div>
  );
};

export default GoogleAuth;
