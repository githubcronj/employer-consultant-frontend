import ProtectedRoute from './ProtectedRoute';

const withEmployerAuth = (WrappedComponent) => {
  const ComponentWithEmployerAuth = (props) => (
    <ProtectedRoute role="employer">
      <WrappedComponent {...props} />
    </ProtectedRoute>
  );

  return ComponentWithEmployerAuth;
};

export default withEmployerAuth;
