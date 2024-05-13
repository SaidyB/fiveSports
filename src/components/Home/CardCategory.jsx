import React from 'react'
import './Home.css'

const CardCategory = ({img, children}) => {
  return (
    <div className='cardCategory font-bold text-xl"'>
        <img src={img} alt=''/>
        {children}
    </div>
  )
}

export default CardCategory