import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import ResetPasswordForm from '../../components/Auth/ResetPasswordForm'
import WithImageBackground from '../helpers/WithImageBackground'
import WithKeyboardAvoidingView from '../helpers/WithKeyboardAvoidingView'

const ResetPassword = ({ navigation, route }) => {
    const screenName = route.name
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [passwordResetRequestWasSent, setPasswordResetRequestWasSent] =
        useState(false)
    const [email, setEmail] = useState()

    function submitPasswordResetRequest(data) {
        setIsSubmitting(true)
        setTimeout(function () {
            console.log(JSON.stringify(data))
            setPasswordResetRequestWasSent(true)
            setEmail(data.email)
            setIsSubmitting(false)
        }, 3000)
    }

    function submitNewPasswordHandler(data) {
        setIsSubmitting(true)
        setTimeout(function () {
            console.log(JSON.stringify({ ...data, email }))
            setIsSubmitting(false)
        }, 3000)
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
