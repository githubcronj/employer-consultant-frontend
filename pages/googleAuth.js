import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { put } from 'redux-saga/effects';
import { googleLogin, googleLoginRedirectAction } from '../store/action/loginaction';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';

const GoogleAuth = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const setUserData = async () => {
    if (!session) {
      // Session data is not available yet, handle it accordingly
      return;
    }
    try {
      const nameParts = session.user.name.split(' ');
      const payload = {
        role: localStorage.getItem('role'),
        email: session?.user?.email,
        firstName: nameParts[0],
        lastName: nameParts[1],
      };
      
      dispatch(googleLogin(payload))
      router.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserData();
  }, [session]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant='h2'>Google Auth Checking....</Typography>
    </div>
  );
};

export default GoogleAuth;
