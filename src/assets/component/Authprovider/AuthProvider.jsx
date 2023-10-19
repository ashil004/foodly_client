import {  createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
 

 export const AuthContext = createContext(null)
  const Auth = getAuth(app);
  

  

const AuthProvider = ({children}) => {
    const [ loding , setloding] = useState( true)
    const [user,setuser] = useState();
    const createUser = (email,password)=>{
        setloding(true);

        return createUserWithEmailAndPassword(Auth,email,password);
    }
    const singIn = (email ,password) => {
        setloding(true);
        return signInWithEmailAndPassword(Auth,email,password);
    }
    const logOut = ()=>{
        setloding(true);
        return signOut(Auth);
    }
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(Auth,CurrentUser =>{
            console.log('Auth state changed',CurrentUser);
            setuser(CurrentUser);
            setloding(false)
        })
        return () => {
            Unsubscribe();
        }
    },[])
    
    const authInfo = {
        user,
        loding,
        createUser,
        singIn,
        logOut,
        
        

    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;