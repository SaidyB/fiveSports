import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../utils/GlobalContextReducer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ReservationDetails = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const reservationRef = doc(db, "reservations", id);
        const reservationDoc = await getDoc(reservationRef);
        if (reservationDoc.exists()) {
          setReservation(reservationDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching reservation:", error);
      }
    };

    fetchReservation();
  }, [id]);

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
    </div>
  );
};

export default ReservationDetails;
