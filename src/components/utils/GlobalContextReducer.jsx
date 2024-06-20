import React, { createContext, useContext, useReducer, useEffect } from "react";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuthContext } from "../utils/AuthContext";

export const ContextGlobal = createContext();

export const initialState = {
  darkMode: false,
  products: [],
  selectedProduct: JSON.parse(localStorage.getItem("selectedProduct")) || null,
  selectedDates: JSON.parse(localStorage.getItem("selectedDates")) || [],
  user: null,
  showConfirmButton: true,
  reservations: [],
};

const objectReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_SELECTED_PRODUCT":
      localStorage.setItem("selectedProduct", JSON.stringify(action.payload));
      return { ...state, selectedProduct: action.payload };
    case "SET_SELECTED_DATES":
      localStorage.setItem("selectedDates", JSON.stringify(action.payload));
      return { ...state, selectedDates: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "CREATE_RESERVATION":
      return { ...state, reservations: [...state.reservations, action.payload] };
    case "TOGGLE_CONFIRM_BUTTON":
      return { ...state, showConfirmButton: action.payload };
    case "SET_RESERVATIONS":
      return { ...state, reservations: action.payload };
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
        const productosRef = collection(db, "products");
        const resp = await getDocs(productosRef);
        const products = resp.docs.map(async (doc) => {
          const productData = doc.data();
          const productId = doc.id;
          const bookingsRef = collection(db, "products", productId, "bookings");
          const bookingsSnapshot = await getDocs(bookingsRef);
          const bookingsData = bookingsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { id: productId, ...productData, bookings: bookingsData };
        });
        const productsWithData = await Promise.all(products);
        dispatch({ type: "SET_PRODUCTS", payload: productsWithData });
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (user) {
      dispatch({ type: "SET_USER", payload: user });
    }
  }, [user]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const reservationsRef = collection(db, "reservations");
        const resp = await getDocs(reservationsRef);
        const reservations = resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch({ type: "SET_RESERVATIONS", payload: reservations });
      } catch (error) {
        console.error("Error fetching reservations: ", error);
      }
    };

    fetchReservations();
  }, []);

  const checkAvailability = async (productId, fromDate, toDate) => {
    const q = query(
      collection(db, "reservations"),
      where("productId", "==", productId),
      where("toDate", ">=", fromDate),
      where("fromDate", "<=", toDate)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  };

  const createReservation = async (product, selectedDates) => {
    if (!selectedDates || selectedDates.length !== 2) {
      throw new Error("No dates selected or incorrect date range");
    }

    const fromDate = selectedDates[0];
    const toDate = selectedDates[1];

    const isAvailable = await checkAvailability(product.id, fromDate, toDate);
    if (!isAvailable) {
      throw new Error("Product not available for the selected dates");
    }

    const reservation = {
      productId: product.id,
      productName: product.name,
      fromDate: fromDate.toISOString(),
      toDate: toDate.toISOString(),
      createdAt: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "reservations"), reservation);
      dispatch({ type: "CREATE_RESERVATION", payload: { id: docRef.id, ...reservation } });
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      throw error;
    }
  };

  const value = { state, dispatch, createReservation, checkAvailability };

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};

export const useGlobalReduceState = () => useContext(ContextGlobal);

