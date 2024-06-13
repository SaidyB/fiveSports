import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductosCard.css";
import { ContextGlobal } from "../utils/GlobalContextReducer";
import BlackButton from "./BlackButton";
import DualMonthCalendar from "../Calendar/DualMonthCalendar";

const ProductDetail = () => {
  const { state, createReservation } = useContext(ContextGlobal); // Usa el contexto global y la función createReservation
  const { products } = state;
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedDates, setSelectedDates] = useState([]);

  const productId = id;
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleReservationClick = async () => {
    try {
      console.log("Selected dates: ", selectedDates);
      await createReservation(product, selectedDates);
      navigate("/reservation");
    } catch (error) {
      console.error("Error al iniciar la reserva:", error);
      alert(
        "Hubo un error al iniciar la reserva. Por favor, intenta de nuevo."
      );
    }
  };

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
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
          <DualMonthCalendar onDateChange={handleDateChange} />
          <button
            className="ver-reserva-button"
            onClick={handleReservationClick}
          >
            Iniciar Reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
