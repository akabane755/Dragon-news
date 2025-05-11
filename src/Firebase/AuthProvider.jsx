import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './Firesbase.init.config';
import { useLocation, useNavigate } from 'react-router';
    const auth=getAuth(app);
export const AuthContext=createContext()

const AuthProvider = ({children}) => {
 //const navigate=useNavigate()
  
  const [load,setLoad]=useState(true)
    const handleSignout=()=>{
        signOut(auth).then(() => {
          setLoad(true)
            alert("Logout successful")
           }).catch((error) => {
            console.log(error.message);
           });
    }
    const handleSignin=(email,password)=>{
      setLoad(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("Signin successfull")
  
   const user = userCredential.user;
   console.log(user)
    setLoad(false)
    //navigate(loc.state?loc.state:'/')
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage)
  });

    }
    const [user,setUser]=useState(null)
    const createUser=(email,pass)=>{
      
       return createUserWithEmailAndPassword(auth,email,pass)
    }
    

    const person1={
        user,
        setUser,
        createUser,
        handleSignout,
        handleSignin,
        load,
        setLoad
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,cuser=>{setUser(cuser)
          setLoad(false);
        });
     
        return ()=>{
            unsubscribe();
            
        }

    },[])
   
    return (
      <AuthContext value={person1}>{children}</AuthContext>
    );
};

export default AuthProvider;