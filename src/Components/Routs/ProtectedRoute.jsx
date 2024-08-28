import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate,  } from "react-router-dom";
import LoadingSpinner from "../Pages/LoadingSpinner";



// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children}) => {
    const {  user, loading } = useContext(AuthContext);
    // console.log(user.displayName);
   
  
    if (loading) {
      return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
      return <Navigate to="/login"></Navigate>;
    }
  return children
};

export default ProtectedRoute;