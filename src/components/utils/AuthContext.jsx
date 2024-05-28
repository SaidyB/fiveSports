import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export const AuthContext= createContext();

export const AuthProvider=({children}) =>{

    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);

    const signup = (email, password) => createUserWithEmailAndPassword(auth,email,password);
    const actualizarNombre = (name) => updateProfile(auth.currentUser,{displayName:name});
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logout = () => signOut(auth)

    useEffect(()=>{
        //funcion que queda pendiente de los cambios en el estado de autenticación del usuario (inicio de sesion, logout o cambio de token) cuando el usuario esta logueado devuvelve el objeto logueado sino null
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });
        return () => unsubscribe();
    },[])
    
    return(
        <AuthContext.Provider value={{signup, login, user, logout,loading,actualizarNombre}}>{children}</AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);