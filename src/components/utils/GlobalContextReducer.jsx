import { createContext, useContext, useReducer, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

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
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(objectReducer, initialState);

  useEffect(() => {
    const productosRef = collection(db, "products");
    getDocs(productosRef)
      .then((resp) => {
        const products = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch({ type: "SET_PRODUCTS", payload: products });
        console.log(products)
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  let data = { state, dispatch };

  return (
    <ContextGlobal.Provider value={data}>{children}</ContextGlobal.Provider>
  );
};

export const useGlobalReduceState = () => useContext(ContextGlobal);
