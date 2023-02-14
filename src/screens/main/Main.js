import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../components/ui/Button'

import { logOut } from '../../util/auth'
import WithImageBackground from '../helpers/WithImageBackground'

import { AuthContext } from '../../ctx/auth-ctx'

const Main = () => {
    const authCxt = useContext(AuthContext)
    const userEmail = authCxt.authenticatedUser.attributes.email

    return (
        <WithImageBackground>
            <View style={styles.rootContainer}>
                <Text style={styles.headText}>Logged as: {userEmail}</Text>
                <Button onPress={logOut}>Log Out</Button>
            </View>
        </WithImageBackground>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        margin: 10,
    },
})
export default Main
