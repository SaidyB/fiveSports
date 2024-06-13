import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../utils/routes";
import { useGlobalReduceState } from "../utils/GlobalContextReducer";
import "./Nav.css";
import Button from "../Button";
import { useAuthContext } from "../utils/AuthContext";

const Nav = () => {
  const { state, dispatch } = useGlobalReduceState();
  const { user, loading } = useAuthContext();
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) return <h1>loading</h1>;

  return (
    <nav className={`navbar ${state.darkMode && "dark"}`}>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div
          className={`md:flex items-center justify-between bg-white py-4 md:px-10 px-5 ${
            state.darkMode && "dark"
          }`}
        >
          <div className="flex items-center justify-between w-full md:w-auto">
            <NavLink
              to={routes.home}
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              {state.darkMode ? (
                <img className="w-15 h-16 logo2" src="/public/img/image.png" />
              ) : (
                <img className="w-15 h-16 logo1" src="/public/img/logo.png" />
              )}
            </NavLink>
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>

          <div
            className={`md:flex items-center ${
              menuOpen ? "block" : "hidden"
            } w-full md:w-auto mobile-menu`}
          >
            {user ? (
              <div className="flex flex-col md:flex-row md:items-center ml-0 md:ml-8 w-full md:w-auto">
                <Link
                  to={routes.verTodos}
                  className="my-2 md:my-0 mr-9 text-register"
                >
                  Ver todos
                </Link>
                <div className="my-2 md:my-0">
                  <NavLink to={routes.Profile} className="my-2 md:my-0">
                    <Button>Mis datos</Button>
                  </NavLink>
                </div>
                <div className="my-2 md:my-0">
                  <NavLink to={routes.VerReserva} className="my-2 md:my-0">
                    <Button>Detalles de Reserva</Button>
                  </NavLink>
                </div>
                <div className="my-2 md:my-0">
                  <button
                    className="bg-white text-blue-500 font-bold border rounded-lg md:shadow-lg font-poppins py-2 px-6 rounded md:ml-1 mr-5 hover:bg-indigo-400 hover:text-white"
                    onClick={() => dispatch({ type: "CHANGE_MODE" })}
                  >
                    <FontAwesomeIcon icon={faMoon} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center ml-0 md:ml-8 w-full md:w-auto">
                <Link
                  to={routes.verTodos}
                  className="my-2 md:my-0 mr-9 text-register"
                >
                  Ver todos
                </Link>
                <Link to={routes.registrarse} className="my-2 md:my-0">
                  <Button>Sign up</Button>
                </Link>
                <NavLink to={routes.inicioSesion} className="my-2 md:my-0">
                  <Button>Login</Button>
                </NavLink>
                <div className="my-2 md:my-0">
                  <button
                    className="bg-white text-blue-500 font-bold border rounded-lg md:shadow-lg font-poppins py-2 px-6 rounded md:ml-1 mr-5 hover:bg-indigo-400 hover:text-white"
                    onClick={() => dispatch({ type: "CHANGE_MODE" })}
                  >
                    <FontAwesomeIcon icon={faMoon} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
