import { createContext, useContext, useReducer, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuthContext } from "../utils/AuthContext"; // Importa el contexto de autenticación

export const ContextGlobal = createContext();

export const initialState = {
  darkMode: false,
  products: [],
  selectedProduct: null,
  user: null, // Añadir el usuario al estado global
};

const objectReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_SELECTED_PRODUCT":
      return { ...state, selectedProduct: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "CREATE_RESERVATION":
      return { ...state, reservation: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(objectReducer, initialState);
  const { user } = useAuthContext(); // Obtén el usuario del contexto de autenticación

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

  const createReservation = async (product, selectedDates) => {
    if (!selectedDates || selectedDates.length !== 2) {
      throw new Error("No dates selected or incorrect date range");
    }

    const reservation = {
      productId: product.id,
      productName: product.name,
      fromDate: selectedDates[0].toISOString(),
      toDate: selectedDates[1].toISOString(),
      createdAt: new Date().toISOString(),
    };

    try {
      console.log("Reservation data to be sent: ", reservation);
      // Enviar los datos de la reserva a Firestore
      await addDoc(collection(db, "reservations"), reservation);
      dispatch({ type: "SET_SELECTED_PRODUCT", payload: product });
      dispatch({ type: "CREATE_RESERVATION", payload: reservation });
      console.log("Reservation successfully created");
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      throw error;
    }
  };

  let data = { state, dispatch, createReservation };

  return (
    <ContextGlobal.Provider value={data}>{children}</ContextGlobal.Provider>
  );
};

export const useGlobalReduceState = () => useContext(ContextGlobal);
