import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductosCard.css";
import { ContextGlobal } from "../utils/GlobalContextReducer";
import BlackButton from "./BlackButton";
import DualMonthCalendar from "../Calendar/DualMonthCalendar";

const ProductDetail = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { products } = state;
  const { id } = useParams();
  const navigate = useNavigate();

  const productId = id;
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleReservationClick = () => {
    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product });
    navigate("/reservation");
  };

  return (
    <div className="detail-container">
      <div className="detail-card-grid">
        <div className="detail-card">
          <h1>{product.name}</h1>
          <p className="text-justify">{product.description}</p>
          <img src={product.img} alt={product.name} />
          <p>Precio: {product.price}</p>
          <p>Categoría: {product.category}</p>
          <BlackButton />
        </div>
        <div className="calendar-card">
          <h2>Selecciona Fechas</h2>
          <DualMonthCalendar />
          <button className="ver-reserva-button" onClick={handleReservationClick}>
            Iniciar Reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
