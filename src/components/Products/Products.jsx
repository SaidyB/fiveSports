import React from 'react'
import { useGlobalReduceState } from '../utils/GlobalContextReducer'
import '../Home/Home.css'


const Products = () => {
  const { state } = useGlobalReduceState();
  const {products}= state
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div className='cardProducts'>

        {firstRow.map((elemento) => (
          <div key={elemento.id} className="producto">
            <img
              src={elemento.img}
              alt="" 
            />
            <div className="texto">
              <p>{elemento.name}</p>
              
            </div>
          </div>
        ))}
      </div>
      <div className='cardProducts'>
        {secondRow.map((elemento) => (
          <div key={elemento.id} className="producto">
            <img
              src={elemento.img}
              alt=""
            />
            <div className="texto">
              <p>{elemento.name}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
