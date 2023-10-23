import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext=createContext(null)

 const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,user=>{
               
                 setUser(user)
                 setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])





const authInfo={
    createUser,
    user,
    loading,
    signIn


}

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node,
}
export default AuthProvider;