import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

import AuthForm from '../../components/Auth/AuthForm'
import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import WithImageBackground from '../helpers/WithImageBackground'
import WithKeyboardAvoidingView from '../helpers/WithKeyboardAvoidingView'

import { createUser } from '../../util/auth'

const Signup = ({ navigation, route }) => {
    const screenName = route.name
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function signupHandler(data) {
        setIsSubmitting(true)
        try {
            await createUser({ email: data.email, password: data.password })
            navigation.navigate('Confirm_Registration', {
                emailAddress: data.email,
            })
        } catch (error) {
            let errorAlertMessage =
                'Please check your input or try again later.'
            if (error.name === 'UsernameExistsException') {
                errorAlertMessage = 'User already exists.'
            }
            setIsSubmitting(false)
            Alert.alert('An error ocurred', errorAlertMessage)
        }
    }

    function goToLogInUpHandler() {
        navigation.replace('Login')
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
                <AuthForm isLogin={false} onSubmit={signupHandler} />
                <View style={styles.buttonContainer}>
                    <FlatButton onPress={goToLogInUpHandler}>
                        I already have account, login
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
export default Signup
