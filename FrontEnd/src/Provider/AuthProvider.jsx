import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/Firebase_init"


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // Register
    const createUser = (email, password) => {
        setUser(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // Login

    const signIn = (email, password) => {
        setUser(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut
    const signout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            console.log('current user', currentuser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])





    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signout

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider