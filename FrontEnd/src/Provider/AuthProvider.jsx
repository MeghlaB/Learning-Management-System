import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/Firebase_init"
import useAxiosPublic from "../Hooks/AxiosPublic"


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic=useAxiosPublic()


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
            if(currentuser){
                // get token and store client
                const userInfo ={email:currentuser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access_token',res.data.token)
                    }
                })
            }
            else{
                // TODD: remove token (if token stored in the client local storage, caching in memory)
                localStorage.removeItem('access_token')
            }

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