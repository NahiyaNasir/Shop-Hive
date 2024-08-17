import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Pages/LoadingSpinner";



// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children}) => {
    const {  user, loading } = useContext(AuthContext);
    // console.log(user);
    const location = useLocation();
    // console.log(location.pathname);
    if (loading) {
      return <LoadingSpinner></LoadingSpinner>
    }
    if (user) {
      return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProtectedRoute;