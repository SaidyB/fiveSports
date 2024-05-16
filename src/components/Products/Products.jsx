import React from 'react';
import { useGlobalReduceState } from '../utils/GlobalContextReducer';
import '../Home/Home.css';
import { Link } from 'react-router-dom';
import { routes } from "../utils/routes";
import Button from '../Button';


// Función para mezclar los elementos de un array
const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Copia del array original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Products = () => {
  const { state } = useGlobalReduceState();
  const { products } = state;

  // Mezclar productos aleatoriamente
  const shuffledProducts = shuffleArray(products);
  const firstRow = shuffledProducts.slice(0, 4);
  const secondRow = shuffledProducts.slice(4, 8);


  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div className="cardProducts">
        {firstRow.map((elemento) => (
          <div key={elemento.id} className="producto">
            <img src={elemento.img} alt={elemento.name} />
            <div className="texto mb-2">
              <p>{elemento.name}</p>
            </div>
            <Link to={`${routes.detalles}/${elemento.id}`}><Button>
              
              Ver Detalle
          </Button></Link>
            

            
          </div>
        ))}
      </div>
      <div className="cardProducts">
        {secondRow.map((elemento) => (
          <div key={elemento.id} className="producto">
            <img src={elemento.img} alt={elemento.name} />
            <div className="texto mb-2">
              <p>{elemento.name}</p>
            </div>
            <Link to={`${routes.detalles}/${elemento.id}`}><Button>
              
              Ver Detalle
          </Button></Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;