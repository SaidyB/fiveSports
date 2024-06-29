import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import { ContextGlobal } from "../utils/GlobalContextReducer";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./ReservationDates.css";

const ReservationDates = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { selectedProduct, user, selectedDates } = state;
  const [address, setAddress] = useState("");
  const [confirmedAddress, setConfirmedAddress] = useState("");

  const handleConfirmClick = async () => {
    if (!selectedDates || selectedDates.length !== 2) {
      Swal.fire({
        title: "Error",
        text: "Por favor selecciona un rango de fechas.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (!address.trim()) {
      Swal.fire({
        title: "Error",
        text: "Por favor ingresa tu dirección de domicilio.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      const reservation = {
        productId: selectedProduct.id,
        productName: selectedProduct.name,
        fromDate: new Date(selectedDates[0]).toISOString(),
        toDate: new Date(selectedDates[1]).toISOString(),
        createdAt: new Date().toISOString(),
        userId: user.uid,
        address: address.trim(),
      };

      await addDoc(collection(db, "reservations"), reservation);

      setConfirmedAddress(address.trim());
      setAddress("");

      Swal.fire({
        title: "¡Reserva Confirmada!",
        text: "El producto ha sido reservado correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      dispatch({ type: "CREATE_RESERVATION", payload: reservation });
    } catch (error) {
      console.error("Error al confirmar la reserva:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al confirmar la reserva. Por favor, intenta de nuevo.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <Container maxWidth="sm" className="reservation-container">
      <Paper elevation={3} className="reservation-content">
        <img
          className="product-image"
          alt={selectedProduct.name}
          src={selectedProduct.img}
        />
        <div className="reservation-details">
          <Typography variant="h4" className="product-name">
            {selectedProduct.name}
          </Typography>
          <Typography variant="body1" className="product-description">
            {selectedProduct.description}
          </Typography>
          <Typography variant="body1" className="product-info">
            <strong>Sucursal de entrega:</strong> Bogota D.C.
          </Typography>
          <Typography variant="body1" className="product-info">
            <strong>Nombre:</strong> {user.displayName}
          </Typography>
          <Typography variant="body1" className="product-info">
            <strong>Correo:</strong> {user.email}
          </Typography>
          {selectedDates && selectedDates.length === 2 && (
            <>
              <Typography variant="body1" className="product-info">
                <strong>Check in:</strong>{" "}
                {new Date(selectedDates[0]).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" className="product-info">
                <strong>Check out:</strong>{" "}
                {new Date(selectedDates[1]).toLocaleDateString()}
              </Typography>
            </>
          )}
          <Typography variant="body1" className="product-info">
            <strong>Precio:</strong> {selectedProduct.price}
          </Typography>
          <TextField
            label="Confirma tu dirección de domicilio"
            fullWidth
            multiline
            rows={3}
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="button-container">
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirmClick}
              fullWidth // Asegura que el botón ocupe todo el ancho en móviles
            >
              Confirmar Reserva
            </Button>
          </div>
          {confirmedAddress && (
            <Typography variant="body1" className="confirmed-address">
              <strong>Dirección confirmada:</strong> {confirmedAddress}
            </Typography>
          )}
        </div>
      </Paper>
    </Container>
  );
};

export default ReservationDates;
