import React from 'react';
import './UsuarioRegistrado.css'; // Importa el archivo CSS del perfil de usuario
import { useAuthContext } from '../utils/AuthContext';
import { Button } from '@mui/material';

const UsuarioRegistrado = () => {
  
  const { user,logout, loading }=useAuthContext();

  const handleLogout = async() =>{
    await logout();
    console.log('cerro sesion')
  };

  if (loading) return <h1>loading</h1>


  return (
    <div className='contenedorPadre'>
    <div className="perfil-container">
      <h1 className="perfil-titulo">Perfil de Usuario</h1>
      <div className="perfil-info">
        <div className="campo-info">
          <span className="campo-titulo">{user.displayName}:</span>
          <span className="campo-valor">{user.email}</span>
        </div>
        <div className="campo-info">
          <span className="campo-titulo">Correo electrónico:</span>
          <span className="campo-valor">usuario@example.com</span>
        </div>
          <Button onClick={handleLogout}>Cerrar sesión</Button>
        
      </div>
    </div>
    </div>
  );
};

export default UsuarioRegistrado;
