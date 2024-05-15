import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextGlobal } from './utils/GlobalContextReducer';
import './ProductosCard.css';

const ProductDetail = () => {
  const { state } = useContext(ContextGlobal);
  const history = useHistory();

  // Obtener el producto seleccionado de la URL
  const productId = history.location.pathname.split('/').pop();
  const product = state.products.find((p) => p.id === parseInt(productId));

  // Función para regresar a la página anterior
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="product-card">
      {/* Título del producto alineado a la izquierda */}
      <div className="product-title">
        <h2>{product.title}</h2>
      </div>
      {/* Botón para regresar atrás alineado a la derecha */}
      <div className="go-detail">
        <button onClick={handleGoBack}>Volver</button>
      </div>
      {/* Contenido del producto */}
      <div className="product-info">
        {/* Descripción del producto */}
        <p>{product.description}</p>
        {/* Imágenes del producto */}
        <div className="product-images">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Imagen ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;