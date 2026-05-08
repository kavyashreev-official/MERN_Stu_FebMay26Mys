import { NavLink } from "react-router-dom";

export function ProtectedRoute({isAuthenticated,children}){
    if(!isAuthenticated){
        return <Navigate to="/" />
    }
    return children;
}