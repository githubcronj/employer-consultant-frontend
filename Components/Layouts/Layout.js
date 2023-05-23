import React from 'react';
import { useRouter } from 'next/router';
import { Navbar } from 'Components/Navbar/Navbar';

function Layout(props) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/Login';
  const isSignupPage = router.pathname === '/register';

  const { children } = props;
  return (
    <>
      {!(isLoginPage || isSignupPage) ? <Navbar /> : null}
      {children}
    </>
  );
}

export default Layout;
