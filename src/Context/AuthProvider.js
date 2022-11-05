import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const authContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const signWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const updateUser = name => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const userLogIn = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const handleForgetPass = (userEmail) => {
        if (!userEmail) {
            alert('Please enter your email!');
            return
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent');
            })
            .catch(error => {
                console.log('error', error);
            })
    }



    const logOut = () => {
        localStorage.removeItem('Token')
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        signWithGoogle,
        signWithGithub,
        createUser,
        updateUser,
        userLogIn,
        handleForgetPass,
        logOut
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;