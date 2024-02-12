import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, pasasword) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, pasasword);
    }
    //sign in with google
    const logInwithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            return unsubsCribe();
        }
    }, [])
    const signInuser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        createUser,
        signInuser,
        logOut,
        loader,
        logInwithGoogle
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;