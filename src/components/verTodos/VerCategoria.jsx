import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import AllProducts from './AllProducts';

const VerCategoria = () => {

  const [productos, setProductos] = useState([]);

    const [titulo, setTitulo] = useState("Productos");

    const category = useParams().category;

    useEffect(() => {

      const productosRef = collection(db, "products");
      const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

      getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [category])

  return (
    <AllProducts products={productos} titulo={titulo} />
  )
}

export default VerCategoria