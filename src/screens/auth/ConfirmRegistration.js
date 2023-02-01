import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ConfirmRegistrationForm from '../../components/Auth/ConfirmRegistrationForm'
import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import WithImageBackground from '../helpers/WithImageBackground'
import WithKeyboardAvoidingView from '../helpers/WithKeyboardAvoidingView'

const ConfirmRegistration = ({ navigation, route }) => {
    const screenName = route.name
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
            <WithKeyboardAvoidingView
                contentContainerStyle={styles.rootContainer}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {screenName.replace('_', ' ')}
                    </Text>
                </View>
                <ConfirmRegistrationForm
                    onSubmit={submitConfirmationCodeHandler}
                    onResendConfirmationCode={resendConfirmationCodeHandler}
                />
                <View style={styles.buttonContainer}>
                    <FlatButton onPress={goToLoginHandler}>
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
export default ConfirmRegistration
