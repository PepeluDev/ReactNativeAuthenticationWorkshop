import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import AuthForm from '../../components/Auth/AuthForm'
import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import WithImageBackground from '../helpers/WithImageBackground'
import WithKeyboardAvoidingView from '../helpers/WithKeyboardAvoidingView'

import { authenticate } from '../../util/auth'

const Login = ({ navigation, route }) => {
    const screenName = route.name
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function loginHandler(data) {
        setIsSubmitting(true)
        try {
            await authenticate({ email: data.email, password: data.password })
        } catch (error) {
            if (error.name === 'UserNotConfirmedException') {
                navigation.navigate('Confirm_Registration', {
                    emailAddress: data.email,
                })
            } else {
                setIsSubmitting(false)
                Alert.alert(
                    'An error ocurred',
                    'Please check your input or try again later.'
                )
            }
        }
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
