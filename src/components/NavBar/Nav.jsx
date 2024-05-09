import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../utils/routes";
import { useGlobalReduceState } from "../utils/GlobalContextReducer";
import { useState } from "react";
import "./Nav.css";
import Hamburguer from "../Button";
import Button from "../Button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useGlobalReduceState();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  console.log(state);

  return (
    <nav className="navbar"> 
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-5">
          <div className="flex items-center">
            <NavLink
              to={"/"}
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <img className="w-15 h-16" src="/public/img/logo.png" />
            </NavLink>
            <form className="hidden md:flex ml-0">
              <input
                type="text"
                className="border border-gray-100 shadow-inner rounded"
                style={{width:'100%'}}
                placeholder="  Find the best product here"
              />
              <button type="submit" className="border-xxl border-gray-500 pl-2">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <div className="flex items-center ml-8">
            <NavLink to={routes.registrarse} onClick={handleCloseMenu}>
            <Button>
                Get started
            </Button>
            </NavLink>
            <NavLink to={routes.inicioSesion} onClick={handleCloseMenu}>
            <Button>
                Get started
            </Button>
            </NavLink>
            <button className="mr-5 hover:text-gray-900 inline-flex items-center border-0 py-3 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 shadow-md font-semibold">
              <FontAwesomeIcon
                icon={faMoon}
                onClick={() => dispatch({ type: "CHANGE_MODE" })}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
