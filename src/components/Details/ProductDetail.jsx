import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductosCard.css";
import { ContextGlobal } from "../utils/GlobalContextReducer";
import BlackButton from "./BlackButton";
import DualMonthCalendar from "../Calendar/DualMonthCalendar";

const ProductDetail = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { products, reservations, selectedProduct } = state;
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedDates, setSelectedDates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const product = products.find((item) => item.id === id);
    if (product) {
      dispatch({ type: "SET_SELECTED_PRODUCT", payload: product });
    }
  }, [id, products, dispatch]);

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  const productReservations = reservations.filter(
    (reservation) => reservation.productId === selectedProduct.id
  );

  const handleStartReservationClick = () => {
    if (selectedDates.length !== 2) {
      setError("Por favor selecciona un rango de fechas válido.");
      return;
    }

    dispatch({ type: "SET_SELECTED_DATES", payload: selectedDates });
    navigate("/reservation");
  };

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
    setError(null);
  };

  return (
    <div className="detail-container">
      <div className="detail-card-grid">
        <div className="detail-card">
          <h1>{selectedProduct.name}</h1>
          <p className="text-justify">{selectedProduct.description}</p>
          <img src={selectedProduct.img} alt={selectedProduct.name} />
          <p>Precio: {selectedProduct.price}</p>
          <p>Categoría: {selectedProduct.category}</p>
          <BlackButton />
        </div>
        <div className="calendar-card">
          <h2>Selecciona Fechas</h2>
          <DualMonthCalendar
            onDateChange={handleDateChange}
            reservations={productReservations}
          />
          {error && <p className="error-message">{error}</p>}
          <button
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleStartReservationClick}
          >
            Iniciar Reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
