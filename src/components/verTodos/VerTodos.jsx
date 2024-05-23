import React from 'react'
import { useGlobalReduceState } from "../utils/GlobalContextReducer";
import AllProducts from './AllProducts';

const VerTodos = () => {
    const { state } = useGlobalReduceState();
    const { products } = state;
  return (
    <AllProducts products={products} titulo={"Todos los productos"}/>
  )
}

export default VerTodos