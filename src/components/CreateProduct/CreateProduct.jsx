import React, { useState } from "react";
import "./CreateProduct.css";
import axios from "axios";

const CreateProduct = ({ products }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    img: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar si el nombre del producto ya existe
    const existingProduct = products.find(
      (product) => product.name === formData.name
    );
    if (existingProduct) {
      setError("¡Error! El nombre del producto ya existe.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/products",
        formData
      );
      if (response.status === 201) {
        console.log("Producto creado exitosamente");
      }
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }

    // Reiniciar el formulario después de enviar los datos
    setFormData({
      name: "",
      price: "",
      stock: "",
      description: "",
      category: "",
      img: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Limpiar el error al empezar a escribir en el formulario
    setError("");
  };

  return (
    <div className="create-product-container">
      <h2 className="create-product-heading">Crear Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="create-product-form">
        <div className="form-group">
          <label htmlFor="name">Nombre del Producto:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Nombre del Producto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            placeholder="Precio"
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="form-control"
            placeholder="Stock"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción del Producto:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Descripción del Producto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
            placeholder="Categoría"
          />
        </div>
        <div className="form-group">
          <label htmlFor="img">URL de la Imagen:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="form-control"
            placeholder="URL de la Imagen"
          />
        </div>

        {error && <div className="error">{error}</div>}
        <button type="submit" className="btn-submit">
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
