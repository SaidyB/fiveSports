import React, { useEffect, useState } from "react";
import "./Home.css";
import CardCategory from "./CardCategory";
import Products from "../Products/Products";
import { useGlobalReduceState } from "../utils/GlobalContextReducer";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";
import { DatePicker, Button, Input } from "antd";
import moment from "moment/moment";
import dayjs from "dayjs";
import AllProducts from "../verTodos/AllProducts";

const { RangePicker } = DatePicker;
const { Search } = Input;

const Home = () => {
  const { state } = useGlobalReduceState();
  const { products } = state;
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [productsAvailable, setProductsAvailable] = useState([]);
  const [openMenuCategory, setOpenMenuCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categoría");
  const [textColor, setTextColor] = useState("rgba(0, 0, 0, 0.26)");
  const [mostrarFiltrados, setMostrarFiltrados] = useState(false);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const RangeDatePicker = (props) => {
    const panelRender = (panelNode) => (
      <StyleWrapperDatePicker>{panelNode}</StyleWrapperDatePicker>
    );

    return <DatePicker.RangePicker panelRender={panelRender} {...props} />;
  };

  const dateFormat = "DD-MM-YYYY";
  console.log(fromDate);
  console.log(toDate);
  console.log(productsAvailable);

  const filterByDate = (dates) => {
    if (!dates || dates.length === 0) {
      setProductsAvailable(products);
      return;
    }

    const inicioDate = dates[0];
    const finalDate = dates[1];
    setFromDate(inicioDate.format(dateFormat));
    setToDate(finalDate.format(dateFormat));

    const filteredProducts = products.filter((product) => {
      if (!product.bookings || product.bookings.length === 0) {
        return true; // No tiene reservas, está disponible
      } else {
        return product.bookings.every((booking) => {
          const bookingStart = moment(booking.fromdate, dateFormat);
          const bookingEnd = moment(booking.todate, dateFormat);
          return (
            finalDate.isBefore(bookingStart) || inicioDate.isAfter(bookingEnd)
          );
        });
      }
    });

    setProductsAvailable(filteredProducts);
  };

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const openCategory = () => {
    setOpenMenuCategory(!openMenuCategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setOpenMenuCategory(false);
    setTextColor("black"); // Cambiar el color del texto a negro al seleccionar una categoría
  };

  const buscarProductos = () => {
    if (selectedCategory !== "Categoría" && productsAvailable.length > 0) {
      // Filtrar los productos por la categoría seleccionada
      const filteredProductsByCategory = productsAvailable.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      console.log(filteredProductsByCategory);
      setMostrarFiltrados(true);
      setProductsFiltered(filteredProductsByCategory);
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.trim() !== "") {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setProductsFiltered(filteredProducts);
      setMostrarFiltrados(true);
    } else {
      setMostrarFiltrados(false);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };

  useEffect(() => {
    setProductsAvailable(products);
  }, [products]);

  return (
    <div className="home">
      <div className="container_reservation">
        <div className="title">
          <h1>Busca los mejores productos!</h1>
        </div>
        <div className="container_calendar">
          <div className="textCategory">
            <Button
              className="Button"
              style={{ color: textColor }} // Aplicar el color del texto dinámicamente
              onClick={openCategory}
            >
              {selectedCategory}
            </Button>
            {openMenuCategory && (
              <div className="menu">
                <h4 onClick={() => handleCategoryClick("Gimnasio")}>
                  Gimnasio
                </h4>
                <h4 onClick={() => handleCategoryClick("Deportes")}>
                  Deportes
                </h4>
                <h4 onClick={() => handleCategoryClick("Outdoor")}>Outdoor</h4>
              </div>
            )}
          </div>
          <RangePicker
            className="custom-range-picker"
            disabledDate={disabledDate}
            format={dateFormat}
            onChange={filterByDate}
            placeholder={["Fecha inicio", "Fecha final"]}
          />
          <div className="textBuscar">
            <Button
              onClick={buscarProductos}
              className="btnBuscar bg-indigo-400 border-indigo-400"
            >
              Buscar
            </Button>
          </div>
        </div>
        <div className="search-bar">
          {/* Añadido parágrafo descriptivo */}
          <p
            style={{ color: "white", marginRight: 15, marginTop: 5 }}
            className="search-description"
          >
            Encuentra tu producto
          </p>
          <Search
            className="inputBuscar"
            placeholder="Buscar productos"
            onChange={handleSearchChange}
            value={searchTerm}
            enterButton
          />
        </div>
      </div>
      {mostrarFiltrados && (
        <div className="container-search">
          <AllProducts
            products={productsFiltered}
            titulo={`Resultados de búsqueda`}
            principal={true}
          />
        </div>
      )}
      <div className="container_home">
        <div className="img1">
          <img src="../../../public/img/logo.png" alt="" />
        </div>
        <div className="img2">
          <img
            src="../../../public/img/f.elconfidencial.com_original_969_a33_ee1_969a33ee159951475e24bd1f87771f69.png"
            alt=""
          />
        </div>
      </div>
      <div className="titulo">
        <h2 className="font-bold text-2xl">Recomendados</h2>
      </div>
      <Products />
      <div className="titulo">
        <h2 className="font-bold text-2xl">Categorias</h2>
      </div>
      <article className="sectionCategory">
        <Link className="cardCategory" to={`${routes.categoria}/gimnasio`}>
          <CardCategory img={"/public/img/Categorias/gimnasio.png"}>
            Gimnasio
          </CardCategory>
        </Link>
        <Link className="cardCategory" to={`${routes.categoria}/deportes`}>
          <CardCategory img={"/public/img/Categorias/deporte.png"}>
            Deportes
          </CardCategory>
        </Link>
        <Link className="cardCategory" to={`${routes.categoria}/outdoor`}>
          <CardCategory img={"/public/img/Categorias/outdoor.png"}>
            Outdoor
          </CardCategory>
        </Link>
      </article>
    </div>
  );
};

export default Home;
