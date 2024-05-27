import React from 'react';
import ReactDOM from 'react-dom';
import CustomCard from './CustomCard';

function App() {
  return (
    <div>
      <CustomCard 
        initials="AB" 
        title="Título de la Tarjeta" 
        content="Este es un ejemplo de contenido dentro de una tarjeta personalizada."
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
