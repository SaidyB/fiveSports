// BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navega a la página anterior en el historial
  };

  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIcon />}
      onClick={handleBack}
    >
      Volver Atrás
    </Button>
  );
};

export default BackButton;
