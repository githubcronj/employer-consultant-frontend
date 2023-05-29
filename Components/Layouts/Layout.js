import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar } from 'Components/Navbar/Navbar';
import { SideBar } from 'Components/Sidebar/sideBar';
import { useSelector } from 'react-redux';
import Login from 'pages/Login';

function Layout(props) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/Login';
  const isSignupPage = router.pathname === '/register';
  const isForgotpsw = router.pathname === '/forgotPassword';
  const isresetpsw = router.pathname === '/resetPassword';
  const isconfirmPassword = router.pathname === '/confirmPassword';
  const isverifypsw = router.pathname === '/verifyotp';

  const { children } = props;
  // const [shouldRender, setShouldRender] = useState(false);
  // const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const userExistsInLocalStorage = localStorage.getItem('user');

  //     if (!isLoggedIn && !userExistsInLocalStorage) {
  //       router.push('/Login');
  //     } else {
  //       setShouldRender(true);
  //     }
  //   }
  // }, [isLoggedIn, router]);

  // useEffect(() => {
  //   const userExistsInLocalStorage = localStorage.getItem('user');

  //   if (
  //     typeof window === 'undefined' &&
  //     (!isLoggedIn || !userExistsInLocalStorage)
  //   ) {
  //     router.push('/Login');
  //   }
  // }, []);

  // if (
  //   typeof window !== 'undefined' &&
  //   (!shouldRender || (!isLoggedIn && !localStorage.getItem('user')))
  // ) {
  //   return <Login />;
  // }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
