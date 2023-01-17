import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import AuthForm from '../../components/Auth/AuthForm'
import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import WithImageBackground from '../helpers/WithImageBackground'

const Signup = ({ navigation }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    function signupHandler(loginInfo) {
        setIsSubmitting(true)
        setTimeout(function () {
            console.log(JSON.stringify(loginInfo))
            setIsSubmitting(false)
        }, 3000)
    }

    function goToLogInUpHandler() {
        navigation.replace('Login')
    }

    if (isSubmitting) {
        return <LoadingOverlay />
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
