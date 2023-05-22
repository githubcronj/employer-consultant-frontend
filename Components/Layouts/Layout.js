import React from 'react';
import { useRouter } from 'next/router';
import { Navbar } from 'Components/Navbar/Navbar';

function Layout(props) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';

  const { children } = props;
  return (
    <>
      {!isLoginPage ? <Navbar /> : null}
      {children}
    </>
  );
}

export default Layout;
