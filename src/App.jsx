import { Route, Routes } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home";
import { routes } from "./components/utils/routes";
import Sign from "./components/Sign/Sign";
import Login from "./components/Login/Login";
import ProductDetail from "./components/Details/ProductDetail";
import Footer from "./components/Footer/Footer";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import AllProducts from "./components/verTodos/AllProducts";
import VerTodos from "./components/verTodos/VerTodos";
import VerCategoria from "./components/verTodos/VerCategoria";

function App() {
  return (
    <>
      <div className="bg-fondo min-h-screen font-poppins font-semibold ">
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path={routes.verTodos} element={<VerTodos/>}/>
          <Route path={routes.registrarse} element={<Sign />} />
          <Route path={routes.inicioSesion} element={<Login />} />
          <Route path={`${routes.detalles}/:id`} element={<ProductDetail />} />
          <Route path={routes.admin} element={<CreateProduct />} />
          <Route path={`${routes.categoria}/:category`} element={<VerCategoria/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
