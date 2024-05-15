import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

export const ContextGlobal = createContext();

export const initialState = {
  darkMode: false,
  products: [],
};

const objectReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      const newDarkMode = !state.darkMode;
      return {
        ...state,
        darkMode: newDarkMode,
      };
      default:
        return state;
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(objectReducer, initialState);

  useEffect(()=>{
    axios('/src/db/listOfProducts.JSON')
    .then(res => dispatch({type: 'SET_PRODUCTS', payload: res.data.products}))
  },[])

  let data = {state, dispatch}

  return(
    <ContextGlobal.Provider value={data}>
        {children}
    </ContextGlobal.Provider>
  )
};

export const useGlobalReduceState = () => useContext(ContextGlobal);
