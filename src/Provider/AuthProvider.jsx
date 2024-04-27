import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //create User email and password
    const createUserEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signIn email and password
    const loginWithEmailPasswrod = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update profile
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }

    //sign in with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const loginWithGihub = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    //singOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentlyUser) => {
            setUser(currentlyUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        createUserEmailPassword,
        loginWithEmailPasswrod,
        updateUserProfile,
        logOut,
        loading,
        loginWithGoogle,
        loginWithGihub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.object
}