import { StyleSheet, View } from 'react-native'

import WithImageBackground from '../helpers/WithImageBackground'
import AuthForm from '../../components/Auth/AuthForm'

const Login = ({ navigation }) => {
    function loginHandler(loginInfo) {
        console.log(JSON.stringify(loginInfo))
    }

    return (
        <WithImageBackground>
            <View style={styles.rootContainer}>
                <AuthForm isLogin={true} onSubmit={loginHandler} />
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
export default Login
