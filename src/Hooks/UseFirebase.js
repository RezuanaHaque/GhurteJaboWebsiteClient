import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeAuth from '../Firebase/Firebase.init';
initializeAuth()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const auth = getAuth();

    const googleSignin = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
                setError('')
                // signinLink(email)
            })

            .catch((error) => {
                setError(error.message);
            })
            .finally(() =>
                setLoading(false));
    }
    
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setLoading(false)
        });


    })
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
            setError('')
        })
            .finally(() => setLoading(false))
            .catch((error) => {
                setError(error.message);
            });

    }
    return {
        logOut,
        googleSignin,
        user,
        error,
        loading,
        setError
        // signinLink

    }
};

export default UseFirebase;