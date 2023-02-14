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

export async function confirmUser(username, confirmationCode) {
    // the signin event will be triggered after this confirmation
    return await Auth.confirmSignUp(username, confirmationCode)
}

export async function resendConfirmationCode(username) {
    return await Auth.resendSignUp(username)
}

export async function authenticate(authData) {
    return await Auth.signIn(authData.email, authData.password)
}

export async function forgotPassword(username) {
    return await Auth.forgotPassword(username)
}

export async function forgotPasswordSubmit(username, code, new_password) {
    return await Auth.forgotPasswordSubmit(username, code, new_password)
}
