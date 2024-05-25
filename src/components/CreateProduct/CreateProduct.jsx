import { useGlobalReduceState } from "../utils/GlobalContextReducer";
import React, { useState } from 'react';
import './CreateProduct.css';

const CreateProduct = () => {
  const { state, dispatch } = useGlobalReduceState();
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    stock: '',
    description: '',
    category: '',
    img: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear un nuevo producto con un ID único
    const productWithId = { ...newProduct, id: state.products.length + 1 };
    dispatch({ type: 'SET_PRODUCTS', payload: [...state.products, productWithId] });
    // Limpiar el formulario después de enviar
    setNewProduct({
      id: '',
      name: '',
      price: '',
      stock: '',
      description: '',
      category: '',
      img: ''
    });
  };

  return (
    <>
      <div className="create-product-container">
        <h2 className="create-product-heading">Crear Nuevo Producto</h2>
        <form onSubmit={handleSubmit} className="create-product-form">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={newProduct.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Descripción"
            value={newProduct.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Categoría"
            value={newProduct.category}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="img"
            placeholder="URL de la imagen"
            value={newProduct.img}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit">Añadir Producto</button>
        </form>
      </div>
      <div className="unavailable-message">El formulario no está disponible</div>
    </>
  );
};

export default CreateProduct;