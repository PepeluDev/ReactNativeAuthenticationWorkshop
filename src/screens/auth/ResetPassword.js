import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import ResetPasswordForm from '../../components/Auth/ResetPasswordForm'
import WithImageBackground from '../helpers/WithImageBackground'
import WithKeyboardAvoidingView from '../helpers/WithKeyboardAvoidingView'

import { forgotPassword, forgotPasswordSubmit } from '../../util/auth'

const ResetPassword = ({ navigation, route }) => {
    const screenName = route.name
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [passwordResetRequestWasSent, setPasswordResetRequestWasSent] =
        useState(false)
    const [email, setEmail] = useState()

    async function submitPasswordResetRequest(data) {
        setIsSubmitting(true)
        try {
            console.log(data.email)
            await forgotPassword(data.email)
            setEmail(data.email)
            setPasswordResetRequestWasSent(true)
        } catch (error) {
            Alert.alert(
                'Password reset request failed',
                'Please check the input email address or try again later'
            )
        }
        setIsSubmitting(false)
    }

    async function submitNewPasswordHandler(data) {
        setIsSubmitting(true)
        try {
            await forgotPasswordSubmit(
                email,
                data.confirmationCode,
                data.password
            )
            Alert.alert(
                'Password reset succeeded',
                'Please login with your new credentials'
            )
            goToLogInHandler()
        } catch (error) {
            setIsSubmitting(false)
            Alert.alert('Password reset failed', 'Please try again later')
        }
    }

    function goToLogInHandler() {
        navigation.replace('Login')
    }

    let contentToRender = <LoadingOverlay />

    if (!isSubmitting) {
        contentToRender = (
            <WithKeyboardAvoidingView
                contentContainerStyle={styles.rootContainer}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {screenName.replace('_', ' ')}
                    </Text>
                </View>
                <ResetPasswordForm
                    requestWasSent={passwordResetRequestWasSent}
                    onSubmitPasswordResetRequest={submitPasswordResetRequest}
                    onSubmitNewPassword={submitNewPasswordHandler}
                />
                <View style={styles.buttonContainer}>
                    <FlatButton onPress={goToLogInHandler}>
                        Back to Login
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
export default ResetPassword
