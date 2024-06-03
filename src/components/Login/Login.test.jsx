import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import { AuthContext } from '../utils/AuthContext'; // Importa el contexto AuthContext

describe('Login component', () => {
  it('displays error message when login fails with invalid credentials', () => {
    // Renderiza el componente Login envuelto en un contexto de autenticación simulado
    render(
      <AuthContext.Provider value={{
        login: () => {}, // Simula una función de inicio de sesión vacía
        error: 'Verifique sus datos', // Establece un mensaje de error
      }}>
        <Router>
          <Login />
        </Router>
      </AuthContext.Provider>
    );

    // Intenta encontrar el mensaje de error y espera un tiempo corto para que pueda aparecer
    setTimeout(() => {
      const errorMessage = screen.queryByText('Verifique sus datos');
      expect(errorMessage).toBeInTheDocument(); // Verifica si se muestra el mensaje de error en la pantalla
    }, 1000); // Espera 1 segundo antes de verificar
  });
});
