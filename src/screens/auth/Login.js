import { StyleSheet, View } from 'react-native'

import AuthForm from '../../components/Auth/AuthForm'
import FlatButton from '../../components/ui/FlatButton'
import WithImageBackground from '../helpers/WithImageBackground'

const Login = ({ navigation }) => {
    function loginHandler(loginInfo) {
        console.log(JSON.stringify(loginInfo))
    }

    function goToSignUpHandler() {
        navigation.replace('Signup')
    }

    return (
        <WithImageBackground>
            <View style={styles.rootContainer}>
                <AuthForm isLogin={true} onSubmit={loginHandler} />
                <View style={styles.buttonContainer}>
                    <FlatButton onPress={goToSignUpHandler}>
                        Create a new account
                    </FlatButton>
                </View>
            </View>
        </WithImageBackground>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        marginVertical: 3,
    },
})
export default Login
