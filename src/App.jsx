// eslint-disable-next-line no-unused-vars
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home";
import { routes } from "./components/utils/routes";
import Sign from "./components/Sign";
import Login from "./components/Login";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <div className="bg-fondo min-h-screen font-poppins font-semibold ">
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path={routes.registrarse} element={<Sign />} />
          <Route path={routes.inicioSesion} element={<Login />} />
        </Routes>
        <Products />
      </div>
    </>
  );
}

export default App;
