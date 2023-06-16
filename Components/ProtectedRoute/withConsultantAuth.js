import ProtectedRoute from './ProtectedRoute';

const withConsultantAuth = (WrappedComponent) => {
  const ComponentWithConsultantAuth = (props) => (
    <ProtectedRoute role="consultant">
    <WrappedComponent {...props} />
  </ProtectedRoute>
  );
  return ComponentWithConsultantAuth;
};

export default withConsultantAuth;

