import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googlePopUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(user.email);
     
      const userEmail=currentUser?.email || user?.email
      const loggedUser={email:userEmail}
      setUser(currentUser);
      setLoading(false);


      if (currentUser) {
         axios.post("http://localhost:5002/jwt",loggedUser, {withCredentials:true})
        .then(res=>{
            console.log(res.data)
        })

      }else{
         axios.post('http://localhost:5002/logout',loggedUser,{withCredentials:true})
         .then(res=>{
            console.log(res.data);
         })
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user]);

  const authInfo = {
    createUser,
    user,
    loading,
    signIn,
    googlePopUp,
    LogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
