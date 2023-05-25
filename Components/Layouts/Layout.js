import React from 'react';
import { useRouter } from 'next/router';
import { Navbar } from 'Components/Navbar/Navbar';

function Layout(props) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/Login';
  const isSignupPage = router.pathname === '/register';
  const isForgotpsw = router.pathname === '/forgotPassword';
  const isresetpsw = router.pathname === '/resetPassword';
  const isconfirmPassword = router.pathname === '/confirmPassword';
  const { children } = props;
  return (
    <>
      {!(isLoginPage || isSignupPage || isForgotpsw || isresetpsw || isconfirmPassword) ? <Navbar /> : null}
      {children}
    </>
  );
}

export default Layout;
