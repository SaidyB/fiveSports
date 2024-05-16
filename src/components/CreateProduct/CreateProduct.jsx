import { useGlobalReduceState } from "../utils/GlobalContextReducer";
import React, { useState } from 'react';
import "./CreateProduct.css";


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
    <div className="create-product-container">
      <form onSubmit={handleSubmit}>
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
      <button type="submit">Añadir Producto</button>
    </form>

    </div>
    
  );
};

export default CreateProduct;
    // <div className="create-product-container">
    //   <h2 className="create-product-heading">Crear Nuevo Producto</h2>
    //   <form onSubmit={handleSubmit} className="create-product-form">
    //     <div className="form-group">
    //       <label htmlFor="nombre">Nombre del Producto:</label>
    //       <input
    //         type="text"
    //         id="nombre"
    //         name="nombre"
    //         value={formData.nombre}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Nombre del Producto"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="descripción">Descripción del Producto:</label>
    //       <textarea
    //         id="descripción"
    //         name="descripción"
    //         value={formData.descripción}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Descripción del Producto"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="imagen">URL de la Imagen:</label>
    //       <input
    //         type="text"
    //         id="imagen"
    //         name="imagen"
    //         value={formData.imagen}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="URL de la Imagen"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="precio">Precio:</label>
    //       <input
    //         type="text"
    //         id="precio"
    //         name="precio"
    //         value={formData.precio}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Precio"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="stock">Stock:</label>
    //       <input
    //         type="text"
    //         id="stock"
    //         name="stock"
    //         value={formData.stock}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Stock"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="categoría">Categoría:</label>
    //       <input
    //         type="text"
    //         id="categoría"
    //         name="categoría"
    //         value={formData.categoría}
    //         onChange={handleChange}
    //         className="form-control"
    //         placeholder="Categoría"
    //       />
    //     </div>
    //     {error && <div className="error">{error}</div>}
    //     <button type="submit" className="btn-submit">
    //       Crear Producto
    //     </button>
    //   </form>
    // </div>
