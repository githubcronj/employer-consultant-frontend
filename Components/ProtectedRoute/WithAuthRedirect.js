import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const withAuthRedirect = (WrappedComponent, redirectPath = '') => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = typeof window !== 'undefined' && localStorage.getItem('CurrentUser');
      const userRole = typeof window !== 'undefined' && localStorage.getItem('role');

      if (token) {
        // User is already authenticated
        if (userRole === 'consultant' && (router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgotPassword' || router.pathname === '/reset-password')) {
          // Redirect consultant to /search_job if trying to access login, register, forgotPassword, or reset-password
          router.push('/search_job');
        } else if (userRole === 'employer' && (router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgotPassword' || router.pathname === '/reset-password')) {
          // Redirect employer to / if trying to access login, register, forgotPassword, or reset-password
          router.push('/');
        } else {
          // Redirect to a different page if already authenticated
          router.push(redirectPath);
        }
      }else{
          setIsAuthenticated(true);
      }
    }, [router , redirectPath]);


    return isAuthenticated ? <WrappedComponent {...props}/> : null;
  };

  return AuthenticatedComponent;
};

export default withAuthRedirect;
