import React from "react";
import "./Home.css";
import CardCategory from "./CardCategory";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className='home '>

      <div className='container_home'>
        <div className='img1' >
        <img src="../../../public/img/logo.png" alt="" />
        </div>
        <div className='img2' >
        <img src="../../../public/img/f.elconfidencial.com_original_969_a33_ee1_969a33ee159951475e24bd1f87771f69.png" alt="" />
        </div>
      </div>

      <div className='titulo'>
        <h2 className='font-bold text-2xl'>Recomendados</h2>
      </div>
      <Products/>


      <div className='titulo'>
        <h2 className='font-bold text-2xl'>Categorias</h2>
      </div>
      
      <article className='sectionCategory'>
        <CardCategory img={'/public/img/Categorias/gimnasio.png'}>Gimnasio</CardCategory>
        <CardCategory img={'/public/img/Categorias/deporte.png'}>Deportes</CardCategory>
        <CardCategory img={'/public/img/Categorias/outdoor.png'}>Outdoor</CardCategory>
        <CardCategory img={'/public/img/Categorias/ciclismo.png'}>Ciclismo</CardCategory>

      </article>
    </div>
  );
};

export default Home;
