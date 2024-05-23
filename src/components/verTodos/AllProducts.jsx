import React from 'react'
import './AllProducts.css'
import ViewProducts from './ViewProducts';

const AllProducts = ({products, titulo}) => {


  return (
   <div className='container-main'>
    <h2 className='title'>{titulo}</h2>
    <div className='card-todosP'>
        <div className='cardP'>
            {
                products.map((item)=><ViewProducts id={item.id} key={item.id} name={item.name} img={item.img}/>)
            }
          
        </div>
        
    </div>

   </div>
   
    
  )
}

export default AllProducts