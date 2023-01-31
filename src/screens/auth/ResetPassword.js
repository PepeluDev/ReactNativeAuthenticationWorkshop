import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import ResetPasswordForm from '../../components/Auth/ResetPasswordForm'
import WithImageBackground from '../helpers/WithImageBackground'

const ResetPassword = ({ navigation }) => {
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

    if (isSubmitting) {
        return <LoadingOverlay />
    }

    return (
        <WithImageBackground>
            <View style={styles.rootContainer}>
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
export default ResetPassword
