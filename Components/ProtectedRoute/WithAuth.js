import ProtectedRoute from './ProtectedRoute';

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => (
    <ProtectedRoute>
      <WrappedComponent {...props} />
    </ProtectedRoute>
  );

  return AuthenticatedComponent;
};

export default withAuth;
