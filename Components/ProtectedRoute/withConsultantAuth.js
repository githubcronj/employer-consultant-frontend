import ProtectedRoute from './ProtectedRoute';

const withConsultantAuth = (WrappedComponent) => {
  return (props) => (
    <ProtectedRoute role="consultant">
      <WrappedComponent {...props} />
    </ProtectedRoute>
  );
};

export default withConsultantAuth;
