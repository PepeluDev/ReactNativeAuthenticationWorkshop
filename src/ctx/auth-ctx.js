import { createContext, useState, useEffect } from 'react'

import { Amplify, Hub } from 'aws-amplify'
import awsconfig from '../aws-exports'

import { getCurrentauthenticatedUser } from '../util/auth'

Amplify.configure(awsconfig)

export const AuthContext = createContext({
    authenticatedUser: undefined,
})

function AuthContextProvider({ children }) {
    const [authenticatedUser, setAuthenticatedUser] = useState(undefined)

    const checkUser = async () => {
        try {
            const authenticatedUser = await getCurrentauthenticatedUser()
            setAuthenticatedUser(authenticatedUser)
        } catch (error) {
            setAuthenticatedUser(null)
        }
    }

    useEffect(() => {
        const authListener = (data) => {
            if (
                data.payload.event === 'signIn' ||
                data.payload.event === 'signOut'
            ) {
                checkUser()
            }
        }
        checkUser()
        const removeAuthListener = Hub.listen('auth', authListener)
        return () => removeAuthListener()
    }, [])

    const value = {
        authenticatedUser: authenticatedUser,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
