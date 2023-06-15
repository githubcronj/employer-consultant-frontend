import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children ,role}) => {
  const router = useRouter();

  useEffect(() => {

    const token = typeof window !== 'undefined' && localStorage.getItem('CurrentUser');
    const userRole = typeof window !== 'undefined' && localStorage.getItem('role');
    if (!token || userRole !== role) {
      // Redirect to login or any other page
      router.push('/login');
    }
    
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
