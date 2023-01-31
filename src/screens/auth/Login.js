import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import AuthForm from '../../components/Auth/AuthForm'
import FlatButton from '../../components/ui/FlatButton'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import WithImageBackground from '../helpers/WithImageBackground'

const Login = ({ navigation }) => {
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
        navigation.replace('ResetPassword')
    }

    let contentToRender = <LoadingOverlay />

    if (!isSubmitting) {
        contentToRender = (
            <View style={styles.rootContainer}>
                <AuthForm isLogin={true} onSubmit={loginHandler} />
                <View style={styles.buttonContainer}>
                    <FlatButton onPress={goToSignUpHandler}>
                        Create a new account
                    </FlatButton>
                    <FlatButton onPress={goToResetPasswordHandler}>
                        Forgot My password
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
export default Login
