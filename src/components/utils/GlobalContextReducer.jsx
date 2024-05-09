import { createContext, useContext, useReducer } from "react";

export const ContextGlobal = createContext();

export const initialState = {
  darkMode: false
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
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(objectReducer, initialState);

  let data = {state, dispatch}

  return(
    <ContextGlobal.Provider value={data}>
        {children}
    </ContextGlobal.Provider>
  )
};

export const useGlobalReduceState = () => useContext(ContextGlobal);
