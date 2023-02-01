import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AuthForm from '../../components/Auth/AuthForm'
import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import WithImageBackground from '../helpers/WithImageBackground'
import WithKeyboardAvoidingView from '../helpers/WithKeyboardAvoidingView'

const Login = ({ navigation, route }) => {
    const screenName = route.name
    const [isSubmitting, setIsSubmitting] = useState(false)

    function loginHandler(loginInfo) {
        setIsSubmitting(true)
        setTimeout(function () {
            console.log(JSON.stringify(loginInfo))
            setIsSubmitting(false)
        }, 3000)
    }

    function goToSignUpHandler() {
        navigation.replace('Signup')
    }

    function goToResetPasswordHandler() {
        navigation.replace('Reset_Password')
    }

    let contentToRender = <LoadingOverlay />

    if (!isSubmitting) {
        contentToRender = (
            <WithKeyboardAvoidingView
                contentContainerStyle={styles.rootContainer}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{screenName}</Text>
                </View>
                <AuthForm isLogin={true} onSubmit={loginHandler} />
                <View style={styles.buttonContainer}>
                    <FlatButton onPress={goToSignUpHandler}>
                        Create a new account
                    </FlatButton>
                    <FlatButton onPress={goToResetPasswordHandler}>
                        Forgot My password
                    </FlatButton>
                </View>
            </WithKeyboardAvoidingView>
        )
    }

    return <WithImageBackground>{contentToRender}</WithImageBackground>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    textContainer: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonContainer: {
        marginVertical: 3,
    },
})
export default Login
