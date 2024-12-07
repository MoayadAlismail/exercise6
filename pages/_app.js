import Header from "@/components/Header"
import '@/styles/globals.css';

import { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { logoutUser } from "@/utils/firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuWeheZUSziSh1tFyc6Y6H0zdVwFQEnrQ",
  authDomain: "exercise-6-4d425.firebaseapp.com",
  projectId: "exercise-6-4d425",
  storageBucket: "exercise-6-4d425.firebasestorage.app",
  messagingSenderId: "1073454329435",
  appId: "1:1073454329435:web:b3ade019e3385abc68997e"
};


export default function App({ Component, pageProps }) {
    const [appInitialized, setAppInitialized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null);
    const [error, setError] = useState(null);

    // Initialize Firebase
    useEffect(() => {
        initializeApp(firebaseConfig);
        setAppInitialized(true);
    }, []);

    useEffect(() => {
        if (appInitialized) {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUserInformation(user);
                    setIsLoggedIn(true);
                } else {
                    setUserInformation(null);
                    setIsLoggedIn(false);
                }
                setIsLoading(false);
            });
        }
    }, [appInitialized]);

    if (isLoading) return null;

    return (
        <>
            <Header isLoggedIn={isLoggedIn} user={userInformation} logoutUserFunction={logoutUser} />
            <Component {...pageProps} 
                isLoggedIn={isLoggedIn} 
                user={userInformation}
            />
        </>
    );
}