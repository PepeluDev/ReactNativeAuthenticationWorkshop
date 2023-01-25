import { View, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'

import Button from '../ui/Button'
import ControlledInput from '../ui/ControlledInput'

const CONFIRMATION_CODE_REGEX = /^[0-9]{6}$/

const ConfirmRegistrationForm = ({ onSubmit, onResendConfirmationCode }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function submitHandler(data) {
        onSubmit(data.confirmationCode)
    }

    function resendConfirmationCodeHandler() {
        onResendConfirmationCode()
    }

    return (
        <>
            <View style={styles.rootContainer}>
                <ControlledInput
                    control={control}
                    name="confirmationCode"
                    rules={{
                        required: 'field required',
                        pattern: {
                            value: CONFIRMATION_CODE_REGEX,
                            message: 'Insert a valid code',
                        },
                    }}
                    label="Confirmation Code"
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={handleSubmit(submitHandler)}>
                        Submit
                    </Button>
                    <Button
                        onPress={resendConfirmationCodeHandler}
                        style={styles.resendButton}
                    >
                        Resend confirmation code
                    </Button>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding: 26,
        borderRadius: 8,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    resendButton: {
        marginTop: 5,
        backgroundColor: 'grey',
    },
    buttonContainer: {
        marginTop: 5,
    },
})

export default ConfirmRegistrationForm
