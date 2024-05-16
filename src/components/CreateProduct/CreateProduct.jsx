import React, { useState } from "react";
import "./CreateProduct.css";
import axios from "axios";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripción: "",
    imagen: "",
    precio: "",
    stock: "",
    categoría: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar si el nombre del producto ya existe
    const existingProduct = products.find(
      (product) => product.nombre === formData.nombre
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
      nombre: "",
      descripción: "",
      imagen: "",
      precio: "",
      stock: "",
      categoría: "",
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
          <label htmlFor="nombre">Nombre del Producto:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-control"
            placeholder="Nombre del Producto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripción">Descripción del Producto:</label>
          <textarea
            id="descripción"
            name="descripción"
            value={formData.descripción}
            onChange={handleChange}
            className="form-control"
            placeholder="Descripción del Producto"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagen">URL de la Imagen:</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="form-control"
            placeholder="URL de la Imagen"
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input
            type="text"
            id="precio"
            name="precio"
            value={formData.precio}
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
          <label htmlFor="categoría">Categoría:</label>
          <input
            type="text"
            id="categoría"
            name="categoría"
            value={formData.categoría}
            onChange={handleChange}
            className="form-control"
            placeholder="Categoría"
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="btn-submit">
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
