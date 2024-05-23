import React, { useContext } from "react";
import "./ProductosCard.css";
import { ContextGlobal } from "../utils/GlobalContextReducer";
import { useParams } from "react-router-dom";
import BlackButton from "./BlackButton";

const ProductDetail = () => {
  const { state } = useContext(ContextGlobal);
  const { products } = state;

  const { id } = useParams();
  const productId = id;

  // Buscar el producto correspondiente
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-card-grid">
        <div className="detail-card">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <img src={product.img} alt={product.name} />
          <p>Precio: {product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Categoría: {product.category}</p>
          <BlackButton />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
