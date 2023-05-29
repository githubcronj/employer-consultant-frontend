import React from 'react';
import { useRouter } from 'next/router';
import { Navbar } from 'Components/Navbar/Navbar';
import { SideBar } from 'Components/Sidebar/sideBar';
function Layout(props) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/Login';
  const isSignupPage = router.pathname === '/register';
  const isForgotpsw = router.pathname === '/forgotPassword';
  const isresetpsw = router.pathname === '/resetPassword';
  const isconfirmPassword = router.pathname === '/confirmPassword';
  const isverifypsw = router.pathname === '/verifyotp';

  const { children } = props;
  return (
    <>
      {!(
        isLoginPage ||
        isSignupPage ||
        isForgotpsw ||
        isresetpsw ||
        isconfirmPassword ||
        isverifypsw
      ) ? (
        <Navbar />
      ) : null}
      {children}
      {/* {!(
        isLoginPage ||
        isSignupPage ||
        isForgotpsw ||
        isresetpsw ||
        isconfirmPassword ||
        isverifypsw
      ) ? (
        <SideBar />
      ) : null}
      {children} */}
    </>
  );
}

export default Layout;
