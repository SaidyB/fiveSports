import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct, getProducts } from "../../../services/productServices";
import CreateProduct from "./CreateProduct";

const CreateProductContainer = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    img: "",
  });
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing products to validate against
    getProducts()
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar si el nombre del producto ya existe
    const existingProduct = products.find(
      (product) => product.name === newProduct.name
    );
    if (existingProduct) {
      setError("¡Error! El nombre del producto ya existe.");
      return;
    }

    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
      description: newProduct.description,
      category: newProduct.category,
      img: newProduct.img,
    };

    try {
      await createProduct(data);
      console.log("Producto creado exitosamente");
      navigate("/Home");
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    setError(""); // Limpiar el error al empezar a escribir en el formulario
  };

  return (
    <div>
      <CreateProduct
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={newProduct}
        error={error}
      />
    </div>
  );
};

export default CreateProductContainer;
