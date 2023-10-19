import {  createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut ,GoogleAuthProvider ,signInWithPopup } from 'firebase/auth';
 

 export const AuthContext = createContext(null)
  const Auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  

const AuthProvider = ({children}) => {
    const [user,setuser] = useState();
    const createUser = (email,password)=>{

        return createUserWithEmailAndPassword(Auth,email,password);
    }
    const singIn = (email ,password) => {
        return signInWithEmailAndPassword(Auth,email,password);
    }

    const googleLogIn = (Auth,provider) =>{
        return signInWithPopup(Auth,provider);
    }

    
    


    

    const authInfo = {
        user,
        createUser,
        singIn,
        googleLogIn,

    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;