import { StyleSheet, View } from 'react-native'

import WithImageBackground from '../helpers/WithImageBackground'
import AuthForm from '../../components/Auth/AuthForm'

const Signup = () => {
    function signupHandler(loginInfo) {
        console.log(JSON.stringify(loginInfo))
    }

    return (
        <WithImageBackground>
            <View style={styles.rootContainer}>
                <AuthForm isLogin={false} onSubmit={signupHandler} />
            </View>
        </WithImageBackground>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default Signup
