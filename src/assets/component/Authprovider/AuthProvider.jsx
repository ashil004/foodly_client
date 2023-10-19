import {  createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
 

 export const AuthContext = createContext(null)
  const Auth = getAuth(app);

  

const AuthProvider = ({children}) => {
    const [user,setuser] = useState();
    const createUser = (email,password)=>{

        return createUserWithEmailAndPassword(Auth,email,password);
    }
    const singIn = (email ,password) => {
        return signInWithEmailAndPassword(Auth,email,password);
    }
    
    


    

    const authInfo = {
        user,
        createUser,
        singIn,

    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;