import { useRouter } from 'next/router';
import React from 'react'
import  { useEffect } from "react";
import { useDispatch } from "react-redux";

import { put } from 'redux-saga/effects';
import { googleLogin } from '../store/action/loginaction';

import { Typography } from '@mui/material';
const googleAuth = () => {

    const dispatch = useDispatch();
    
  
    const router = useRouter();
    

    useEffect(() => {
      const role = localStorage.getItem("role")
      
    const payload = {
  role:role,
    };
   
      dispatch(googleLogin(payload));
      router.push('/profile');
    }, [dispatch,router]);
  return (

    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Typography variant="h2">Google Auth</Typography>
  </div>
  )
}

export default googleAuth