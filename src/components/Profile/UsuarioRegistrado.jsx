import React from "react";
import "./UsuarioRegistrado.css"; // Importa el archivo CSS del perfil de usuario
import { useAuthContext } from "../utils/AuthContext";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Button,
  Typography,
} from "@mui/material";

const UsuarioRegistrado = () => {
  const { user, logout, loading } = useAuthContext();

  const handleLogout = async () => {
    await logout();
    console.log("Cerró sesión");
  };

  if (loading) return <h1>loading</h1>;

  // Obtener las iniciales del nombre y apellido
  const getInitials = (name) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return initials.toUpperCase();
  };

  return (
    <div className="contenedorPadre">
      <Card className="perfil-tarjeta">
        <CardHeader
          avatar={
            <Avatar className="avatar">{getInitials(user.displayName)}</Avatar>
          }
          title={
            <Typography variant="h5" className="perfil-titulo">
              {user.displayName}
            </Typography>
          }
        />
        <CardContent className="perfil-info">
          <div className="campo-info">
            <Typography variant="body2" className="campo-titulo">
              Correo electrónico:
            </Typography>
            <Typography variant="body2" className="campo-valor">
              {user.email}
            </Typography>
          </div>
          <div className="campo-info">
            <Typography variant="body2" className="campo-titulo">
              Contraseña:
            </Typography>
            <Typography variant="body2" className="campo-valor">
              *********
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogout}
            className="logout-button"
          >
            Cerrar sesión
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsuarioRegistrado;
