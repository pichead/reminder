"use client"
import { createContext, useContext, useEffect, useState } from 'react'
import { authState } from '@/firebase/auth'
const AuthContext = createContext<object>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: any) => {

    const [user, setUser] = useState<object | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    

    const checkUser =  async () => {
        const getuser = await authState()
        console.log(getuser)

        if (getuser) {
            
            setUser(getuser)
            setLoading(false)
        }
        else {

            setUser(null)
            setLoading(false)
        }


    }

    useEffect(() => {

       checkUser()

        // function escape(s: string) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
        // var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape('token') + '=([^;]*)'));
        // if (match) {

        //     var requestOptions: object = {
        //         method: 'GET',
        //         redirect: 'follow'
        //     };

        //     fetch("https://api.scth-ship.com/admin/find-one-token/" + match[1], requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             console.log("result auth : ", result)
        //             if (result.message == "Find One User Admin Success!") {
        //                 // console.log('authContext1')

        //                 setUser(result.result)
        //                 setLoading(false)
        //             }
        //             else {
        //                 // console.log('authContext2')

        //                 setUser(null)
        //                 setLoading(false)
        //             }
        //         })
        //         .catch(error => {
        //             // console.log('authContext3')

        //             setUser(null)
        //             setLoading(false)

        //         });
        // }
        // else {
        //     // console.log('authContext4')

        //     setUser(null)
        //     setLoading(false)
        // }
        //     console.log('authContext5')

        // console.log('authContext')
        // return () => unsubscribe()
    }, [])


    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
