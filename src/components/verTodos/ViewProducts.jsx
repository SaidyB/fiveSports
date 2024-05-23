import React from 'react'
import './AllProducts.css'
import { routes } from '../utils/routes'
import Button from '../Button'
import { Link } from 'react-router-dom';

const ViewProducts = ({id, img,name}) => {
  return (
    <div className='card'>
        <img src={img}/>
        <p>{name}</p>
        <Link to={`${routes.detalles}/${id}`}>
            <Button>
              Ver Detalle
            </Button>
        </Link>
    </div>
  )
}

export default ViewProducts