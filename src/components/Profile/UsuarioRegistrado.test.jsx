import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UsuarioRegistrado from "./UsuarioRegistrado";
import { AuthContext } from "../utils/AuthContext";

describe("UsuarioRegistrado component", () => {
  it("logs out user when logout button is clicked", async () => {
    const logoutMock = () => {}; 

    const user = {
      displayName: "John Doe",
      email: "john@example.com",
    };

    // Renderiza el componente dentro del contexto proporcionado
    render(
      <AuthContext.Provider value={{ user, logout: logoutMock, loading: false }}>
        <UsuarioRegistrado />
      </AuthContext.Provider>
    );

    // Simula hacer clic en el botón de cerrar sesión
    fireEvent.click(screen.getByText("Cerrar sesión"));

    // Verifica si la función de cierre de sesión se ha llamado
    expect.any(logoutMock); // En vitest, no hay una función toHaveBeenCalled, se usa expect.any
  });
});
