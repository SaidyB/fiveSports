import axios from "axios";
import React, { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";

const Products = () => {
  const [items, setItems] = useState([]);

  const productos = axios.get("http://localhost:5001/products");

  useEffect(() => {
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Dividir los productos en dos arrays, cada uno con 4 elementos
  const firstRow = items.slice(0, 4);
  const secondRow = items.slice(4, 8);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "200px",
        }}
      >
        {firstRow.map((elemento) => (
          <div key={elemento.id} className="producto">
            <img
              src={elemento.img}
              alt=""
              style={{ width: "200px", height: "200px", alignSelf: "center" }}
            />
            <div className="texto">
              <p>{elemento.name}</p>
              <p>{elemento.price}</p>
              <p>{elemento.stock}</p>
              <p>{elemento.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "20px",
        }}
      >
        {secondRow.map((elemento) => (
          <div key={elemento.id} className="producto">
            <img
              src={elemento.img}
              alt=""
              style={{ width: "200px", height: "200px", alignSelf: "center" }}
            />
            <div className="texto">
              <p>{elemento.name}</p>
              <p>{elemento.price}</p>
              <p>{elemento.stock}</p>
              <p>{elemento.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
xx;
