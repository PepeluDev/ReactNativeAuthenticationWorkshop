import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'

import Button from '../ui/Button'
import ControlledInput from '../ui/ControlledInput'
import IconButton from '../ui/IconButton'
import { Regex } from '../../constants/Regex'

const PASSWORD_SECURE_ICON = 'eye-outline'
const PASSWORD_NOT_SECURE_ICON = 'eye-off-outline'

const ResetPasswordForm = ({
    requestWasSent,
    onSubmitPasswordResetRequest,
    onSubmitNewPassword,
}) => {
    const [passwordSecure, setPasswordSecure] = useState(true)

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()
    const passwordCurrentValue = watch('password')

    function submitHandler(data) {
        return requestWasSent
            ? onSubmitNewPassword(data)
            : onSubmitPasswordResetRequest(data)
    }

    return (
        <>
            <View style={styles.rootContainer}>
                {!requestWasSent && (
                    <ControlledInput
                        control={control}
                        name="email"
                        rules={{
                            required: 'field required',
                            pattern: {
                                value: Regex.email,
                                message: 'Email Address Invalid',
                            },
                        }}
                        label="Email Address"
                        keyboardType="email-address"
                    />
                )}
                {requestWasSent && (
                    <>
                        <ControlledInput
                            control={control}
                            name="confirmationCode"
                            rules={{
                                required: 'field required',
                                pattern: {
                                    value: Regex.confirmationCode,
                                    message: 'Insert a valid code',
                                },
                            }}
                            label="Confirmation Code"
                        />
                        <View style={styles.passwordContainer}>
                            <View style={{ flex: 1 }}>
                                <ControlledInput
                                    control={control}
                                    name="password"
                                    rules={{
                                        required: 'field required',
                                        minLength: {
                                            value: 8,
                                            message:
                                                'At least 8 characters long',
                                        },
                                    }}
                                    label="New Password"
                                    secure={passwordSecure}
                                />
                            </View>
                            <IconButton
                                icon={
                                    passwordSecure
                                        ? PASSWORD_SECURE_ICON
                                        : PASSWORD_NOT_SECURE_ICON
                                }
                                color="black"
                                size={27}
                                onPress={() =>
                                    setPasswordSecure((secure) => !secure)
                                }
                            />
                        </View>
                        <ControlledInput
                            control={control}
                            name="confirmPassword"
                            rules={{
                                validate: (value) =>
                                    value === passwordCurrentValue ||
                                    "Passwords don't match",
                            }}
                            label="Confirm New Password"
                            secure={passwordSecure}
                        />
                    </>
                )}
                <View style={styles.buttonContainer}>
                    <Button onPress={handleSubmit(submitHandler)}>
                        {requestWasSent
                            ? 'Change Password'
                            : 'Send reset request'}
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
    buttonContainer: {
        marginTop: 5,
    },
})

export default ResetPasswordForm
