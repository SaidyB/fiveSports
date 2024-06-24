import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
import { routes } from "./routes";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) return <h1>loading</h1>;
  if (!user) return <Navigate to={routes.inicioSesion} state={{ from: location }} />;

  return <>{children}</>;
};
