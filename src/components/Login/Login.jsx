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

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión del usuario
    console.log("Login form data:", form);
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
          <form onSubmit={handleSubmit} className="form">
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={form.email}
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
              value={form.password}
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
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
