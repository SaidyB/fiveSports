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
import "./Sign.css"; // Importa el archivo de CSS
import { useAuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import {routes} from '../utils/routes'

const Sign = () => {

  const [user, setUser] = useState({
    name: "",
    lastName:"",
    email: "",
    password: "",
  });
  console.log(user)

  const { signup,actualizarNombre } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError]= useState();

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
    try{
      await signup(user.email, user.password)
      await actualizarNombre(`${user.name} ${user.lastName}`)
      navigate(routes.Profile)
    }catch(error){
      console.log(error.code)
      switch(error.code){
        case 'auth/invalid-email':
          return setError('Ingrese un email válido')
        case 'auth/weak-password':
          return setError('Ingrese una contraseña mayor a 6 digitos')
        case 'auth/email-already-in-use':
          return setError('Este correo ya esta en uso')
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="containerSign">
      <Paper elevation={3} className="paper">
        <Box className="box">
          <Avatar className="avatar">
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>
          <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit} className="form">
              <TextField
                label="Name"
                name="name"
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={user.name}
                onChange={handleChange}
              />
              <TextField
                label="Last name"
                name="lastName"
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={user.lastName}
                onChange={handleChange}
              />
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
                Register
              </Button>
            </form>
          </div>
          
        </Box>
      </Paper>
    </Container>
  );
};

export default Sign;
