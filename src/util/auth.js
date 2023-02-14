import { Auth } from 'aws-amplify'

export async function createUser(authData) {
    const signUpData = {
        username: authData.email,
        password: authData.password,
        autoSignIn: {
            // Auto sign in after user is confirmed
            enabled: true,
        },
    }
    return await Auth.signUp(signUpData)
}

export async function getCurrentauthenticatedUser() {
    return await Auth.currentAuthenticatedUser({ bypassCache: true })
}
