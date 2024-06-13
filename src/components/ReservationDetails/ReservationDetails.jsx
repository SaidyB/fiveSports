import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../utils/GlobalContextReducer";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";

const ReservationDetails = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { selectedProduct, selectedDates } = state;
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch({ type: "TOGGLE_CONFIRM_BUTTON", payload: false });
    const fetchReservation = async () => {
      try {
        const reservationRef = doc(db, "reservations", id);
        const reservationDoc = await getDoc(reservationRef);
        if (reservationDoc.exists()) {
          setReservation(reservationDoc.data());
        } else {
          setError("No se pudo encontrar la reserva.");
        }
      } catch (error) {
        setError("hubo un problema al obtener la información de la reserva.");
      }
    };

    fetchReservation();

    return () => {
      dispatch({ type: "TOGGLE_CONFIRM_BUTTON", payload: true });
    };
  }, [id, dispatch]);

  const handleConfirmClick = async () => {
    try {
      const reservationData = {
        productId: selectedProduct.id,
        productName: selectedProduct.name,
        fromDate: selectedDates[0].toISOString(),
        toDate: selectedDates[1].toISOString(),
        createdAt: new Date().toISOString(),
      };
      await addDoc(collection(db, "reservations"), reservationData);
      Swal.fire({
        title: "¡Reserva Confirmada!",
        text: "El producto ha sido reservado correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      setError(
        "Hubo un problema al confirmar la reserva. Por favor, intenta de nuevo."
      );
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!reservation) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles de la Reserva</h1>
      <p>Producto: {reservation.productName}</p>
      <p>
        Fecha de Inicio: {new Date(reservation.fromDate).toLocaleDateString()}
      </p>
      <p>Fecha de Fin: {new Date(reservation.toDate).toLocaleDateString()}</p>
      <p>Creado en: {new Date(reservation.createdAt).toLocaleString()}</p>
      <button
        className="ver-detalle-reserva-button"
        onClick={handleConfirmClick}
      >
        Confirmar Reserva
      </button>
    </div>
  );
};

export default ReservationDetails;
