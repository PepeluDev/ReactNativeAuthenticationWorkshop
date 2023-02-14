import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import ConfirmRegistrationForm from '../../components/Auth/ConfirmRegistrationForm'
import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import WithImageBackground from '../helpers/WithImageBackground'
import WithKeyboardAvoidingView from '../helpers/WithKeyboardAvoidingView'

import { confirmUser, resendConfirmationCode } from '../../util/auth'

const ConfirmRegistration = ({ navigation, route }) => {
    const screenName = route.name
    const email = route.params.emailAddress
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function submitConfirmationCodeHandler(confirmationCode) {
        setIsSubmitting(true)
        try {
            await confirmUser(email, confirmationCode)
        } catch (error) {
            setIsSubmitting(false)
            Alert.alert(
                'An error ocurred',
                'Please check your input or try to get the code again.'
            )
        }
    }

    async function resendConfirmationCodeHandler() {
        setIsSubmitting(true)
        try {
            await resendConfirmationCode(email)
            Alert.alert('Code Resent')
        } catch (error) {
            setIsSubmitting(false)
            Alert.alert('An error ocurred', 'Please try again later.')
        }
        setIsSubmitting(false)
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
