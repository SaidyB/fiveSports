import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Avatar,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import "./Login.css"; // Importa el archivo de CSS
import { useAuthContext } from "../utils/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { routes } from "../utils/routes";
import { Alert } from "../utils/Alert";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      // Redirigir al perfil del usuario si existe un mensaje en location.state
      if (location.state?.message) {
        navigate(routes.Profile, { replace: true });
      } else {
        navigate(location.state?.from || routes.Profile, { replace: true });
      }
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-credential':
          return setError('Verifique sus datos');
        default:
          return setError('Error en el inicio de sesión');
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="containerLogin">
      <Paper elevation={3} className="paper">
        <Box className="box">
          <Avatar className="avatar">
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          {location.state?.message && (
            <Typography variant="body1" color="error">
              {location.state.message}
            </Typography>
          )}
          <div>
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit} className="form">
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={user.email}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={user.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="submit-button"
              >
                Login
              </Button>
            </form>
          </div>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
