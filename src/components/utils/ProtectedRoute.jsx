import { Navigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
import { routes } from "./routes";

//solo usuario autenticados pueden ingresar a las rutas protected
export const ProtectedRoute=({children})=>{
    const {user, loading}=useAuthContext();
    if (loading) return <h1>loading</h1>;
    if (!user) return <Navigate to={routes.home}/>;
    
    return <>{children}</>;
}