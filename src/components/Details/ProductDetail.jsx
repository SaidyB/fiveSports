import React, { useContext } from "react";
import "./ProductosCard.css";
import { ContextGlobal } from "../utils/GlobalContextReducer";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/ButtonDetail";

const ProductDetail = () => {
  const { state } = useContext(ContextGlobal);
  const { products } = state;

  const { id } = useParams();
  const productId = parseInt(id);

  // Buscar el producto correspondiente
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <div className="card-grid">
        <div className="card">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <img src={product.img} alt={product.name} />
          <p>Precio: {product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Categoría: {product.category}</p>
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
