import React from 'react'
import './formularios.css'

const CardFormulario = ({children,img}) => {
  return (
    <div className='container'>
      <div className='container_form'>
        <div className='img' >
            <img src={img} alt="" />
        </div>
        <div className='form' >
            {children}
        </div>
      </div>
    </div>
    
  )
}

export default CardFormulario