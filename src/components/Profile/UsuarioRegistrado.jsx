import React from 'react';
import './UsuarioRegistrado.css'; // Importa el archivo CSS del perfil de usuario

const UsuarioRegistrado = () => {
  // Aquí puedes agregar la lógica necesaria para obtener los datos del usuario, si es necesario

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
        {/* Puedes agregar más campos de información del usuario según tus necesidades */}
      </div>
    </div>
    </div>
  );
};

export default UsuarioRegistrado;

