// eslint-disable-next-line no-unused-vars
import { Route, Routes } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home";
import { routes } from "./components/utils/routes";
import Sign from "./components/Sign";
import Login from "./components/Login";
import ProductDetail from "./components/Details/ProductDetail";
import Footer from "./components/footer/Footer";

import CreateProduct from "./components/CreateProduct/CreateProduct";
import Products from "./components/Products/Products";
function App() {
  return (
    <>
      <div className="bg-fondo min-h-screen font-poppins font-semibold ">
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path={routes.verTodos} element={}/> */}
          <Route path={routes.registrarse} element={<Sign />} />
          <Route path={routes.inicioSesion} element={<Login />} />
          <Route path={`${routes.detalles}/:id`} element={<ProductDetail/>}/>
          <Route path={routes.admin} element={<CreateProduct/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
