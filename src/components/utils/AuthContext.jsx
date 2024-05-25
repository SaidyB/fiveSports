import { createContext, useContext, useReducer, useEffect } from "react";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext= createContext();

export const AuthProvider=({children}) =>{

    const signup = (email, password) => createUserWithEmailAndPassword(auth,email,password);
    

    return(
        <AuthContext.Provider value={{signup}}>{children}</AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);