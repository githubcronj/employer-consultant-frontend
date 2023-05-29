import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Navbar } from 'Components/Navbar/Navbar';

function RouteGuard() {
  const router = useRouter();
  const isLoggedIn = Boolean(
    useSelector((state) => state.LoginReducer.isLoggedIn)
  );

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default RouteGuard;
