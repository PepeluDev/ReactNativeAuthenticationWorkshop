import { StyleSheet, View } from 'react-native'

import AuthForm from '../../components/Auth/AuthForm'
import FlatButton from '../../components/ui/FlatButton'
import WithImageBackground from '../helpers/WithImageBackground'

const Signup = ({ navigation }) => {
    function signupHandler(loginInfo) {
        console.log(JSON.stringify(loginInfo))
    }

    function goToLogInUpHandler() {
        navigation.replace('Login')
    }

    return (
        <WithImageBackground>
            <View style={styles.rootContainer}>
                <AuthForm isLogin={false} onSubmit={signupHandler} />
                <View style={styles.buttonContainer}>
                    <FlatButton onPress={goToLogInUpHandler}>
                        I already have account, login
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
export default Signup
