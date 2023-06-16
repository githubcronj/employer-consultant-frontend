import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children, role }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = typeof window !== 'undefined' && localStorage.getItem('CurrentUser');
    const userRole = typeof window !== 'undefined' && localStorage.getItem('role');

    if (!token || userRole !== role) {
      // Redirect to login or any other page
      router.push('/login');
    } else {
      // Authentication check completed
      setIsAuthenticated(true);
    }
  }, [router, role]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
