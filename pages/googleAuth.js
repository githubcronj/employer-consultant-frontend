import { useRouter } from 'next/router';
import React from 'react'
import  { useEffect } from "react";
import { useDispatch } from "react-redux";

import { put } from 'redux-saga/effects';
import { googleLoginRedirectAction } from '../store/action/loginaction';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
const googleAuth = () => {

    const dispatch = useDispatch();
    
  
    const router = useRouter();

    useEffect(() => {
      dispatch(put(googleLoginRedirectAction()))
        .then(() => {
          router.push('/profile');
        })
        .catch((error) => {
          // Handle error
        });
    }, [dispatch, router]);
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