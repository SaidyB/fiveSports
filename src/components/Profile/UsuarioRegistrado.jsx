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
          <span className="campo-titulo">Nombre:</span>
          <span className="campo-valor">Nombre del Usuario</span>
        </div>
        <div className="campo-info">
          <span className="campo-titulo">Apellido:</span>
          <span className="campo-valor">Apellido del Usuario</span>
        </div>
        <div className="campo-info">
          <span className="campo-titulo">Correo electrónico:</span>
          <span className="campo-valor">usuario@example.com</span>
        </div>
        <div className="campo-info">
          <span className="campo-titulo">Contraseña:</span>
          <span className="campo-valor">*********</span>
        </div>
        {/* Puedes agregar más campos de información del usuario según tus necesidades */}
      </div>
    </div>
    </div>
  );
};

export default UsuarioRegistrado;
