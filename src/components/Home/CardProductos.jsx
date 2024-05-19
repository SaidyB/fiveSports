import React from 'react'
import "./Home.css";


const CardProductos = ({img,nombre}) => {
  return (
    <div>
        <img src={img} alt=''/>
        <p>{nombre}</p>
    </div>
  )
}

export default CardProductos