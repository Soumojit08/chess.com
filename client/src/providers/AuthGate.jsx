import Loader from "@/components/ui/loader";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGate = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthGate;
