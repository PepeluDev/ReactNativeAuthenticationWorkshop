import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'

import Button from '../ui/Button'
import ControlledInput from '../ui/ControlledInput'
import IconButton from '../ui/IconButton'
import { Regex } from '../../constants/Regex'
import { Icons } from '../../constants/Icons'

const AuthForm = ({ isLogin, onSubmit }) => {
    const [passwordSecure, setPasswordSecure] = useState(true)

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()
    const passwordCurrentValue = watch('password')
    const emailCurrentValue = watch('email')

    function switchAuthModeHandler() {
        navigation.replace(isLogin ? 'Signup' : 'Login')
    }

    return (
        <>
            <View style={styles.rootContainer}>
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
                {!isLogin && (
                    <ControlledInput
                        control={control}
                        name="confirmEmail"
                        rules={{
                            validate: (value) =>
                                value === emailCurrentValue ||
                                "Emails don't match",
                        }}
                        label="Confirm Email Address"
                        keyboardType="email-address"
                    />
                )}
                <View style={styles.passwordContainer}>
                    <View style={{ flex: 1 }}>
                        <ControlledInput
                            control={control}
                            name="password"
                            rules={{
                                required: 'field required',
                                minLength: {
                                    value: 8,
                                    message: 'At least 8 characters long',
                                },
                            }}
                            label="Password"
                            secure={passwordSecure}
                        />
                    </View>
                    <IconButton
                        icon={
                            passwordSecure
                                ? Icons.securePasword
                                : Icons.unsecurePassword
                        }
                        color="black"
                        size={27}
                        onPress={() => setPasswordSecure((secure) => !secure)}
                    />
                </View>
                {!isLogin && (
                    <ControlledInput
                        control={control}
                        name="confirmPassword"
                        rules={{
                            validate: (value) =>
                                value === passwordCurrentValue ||
                                "Passwords don't match",
                        }}
                        label="Confirm Password"
                        secure={passwordSecure}
                    />
                )}
                <View style={styles.buttonContainer}>
                    <Button onPress={handleSubmit(onSubmit)}>
                        {isLogin ? 'Login' : 'Signup'}
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

export default AuthForm
