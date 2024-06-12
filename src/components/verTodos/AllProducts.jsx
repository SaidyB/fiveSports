import React from 'react'
import './AllProducts.css'
import ViewProducts from './ViewProducts';

const AllProducts = ({products, titulo, principal}) => {


  return (
   <div className={principal ?('container-main2'):('container-main')}>
    <h3 className='title'>{titulo}</h3>
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