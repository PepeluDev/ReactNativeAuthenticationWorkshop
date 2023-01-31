import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import ConfirmRegistrationForm from '../../components/Auth/ConfirmRegistrationForm'
import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import WithImageBackground from '../helpers/WithImageBackground'

const ConfirmRegistration = ({ navigation }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    function submitConfirmationCodeHandler(confirmationCode) {
        setIsSubmitting(true)
        setTimeout(function () {
            console.log('The confirmation code: ' + confirmationCode)
            setIsSubmitting(false)
        }, 3000)
    }

    function resendConfirmationCodeHandler() {
        setIsSubmitting(true)
        setTimeout(function () {
            console.log('Confirmation code Resent')
            setIsSubmitting(false)
        }, 3000)
    }

    function goToLoginHandler() {
        navigation.replace('Login')
    }

    let contentToRender = <LoadingOverlay />

    if (!isSubmitting) {
        contentToRender = (
            <View style={styles.rootContainer}>
                <ConfirmRegistrationForm
                    onSubmit={submitConfirmationCodeHandler}
                    onResendConfirmationCode={resendConfirmationCodeHandler}
                />
                <View style={styles.buttonContainer}>
                    <FlatButton onPress={goToLoginHandler}>
                        Back to Login
                    </FlatButton>
                </View>
            </View>
        )
    }

    return <WithImageBackground>{contentToRender}</WithImageBackground>
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
export default ConfirmRegistration
