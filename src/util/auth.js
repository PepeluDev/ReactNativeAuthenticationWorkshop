import { Auth } from 'aws-amplify'

export async function getCurrentauthenticatedUser() {
    return await Auth.currentAuthenticatedUser({ bypassCache: true })
}
