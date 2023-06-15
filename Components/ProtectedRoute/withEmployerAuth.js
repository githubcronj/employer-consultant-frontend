import ProtectedRoute from './ProtectedRoute';

const withEmployerAuth = (WrappedComponent) => {
  return (props) => (
    <ProtectedRoute role="employer">
      <WrappedComponent {...props} />
    </ProtectedRoute>
  );
};

export default withEmployerAuth;
