import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthWrapper";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { authToken } = useContext(AuthContext);
    return authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;