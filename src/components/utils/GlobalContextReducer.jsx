import React, { createContext, useContext, useReducer, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuthContext } from "../utils/AuthContext";

export const ContextGlobal = createContext();

export const initialState = {
  darkMode: false,
  products: [],
  selectedProduct: null,
  user: null,
  checkIn: '',
  checkOut: ''
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
    case "SET_SELECTED_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_CHECKIN":
      return {
        ...state,
        checkIn: action.payload,
      };
    case "SET_CHECKOUT":
      return {
        ...state,
        checkOut: action.payload,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(objectReducer, initialState);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productosRef = collection(db, 'products');
        const resp = await getDocs(productosRef);
        const products = resp.docs.map(async (doc) => {
          const productData = doc.data();
          const productId = doc.id;
          const bookingsRef = collection(db, 'products', productId, 'bookings');
          const bookingsSnapshot = await getDocs(bookingsRef);
          const bookingsData = bookingsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return {
            id: productId,
            ...productData,
            bookings: bookingsData,
          };
        });
        const productsWithData = await Promise.all(products);
        dispatch({ type: 'SET_PRODUCTS', payload: productsWithData });
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (user) {
      dispatch({ type: 'SET_USER', payload: user });
    }
  }, [user]);

  let data = { state, dispatch };

  return (
    <ContextGlobal.Provider value={data}>{children}</ContextGlobal.Provider>
  );
};

export const useGlobalReduceState = () => useContext(ContextGlobal);
