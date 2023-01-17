import { View, Text, TextInput, StyleSheet } from 'react-native'

import { Colors } from '../../constants/Colors'

const Input = ({
    label,
    keyboardType,
    secure,
    onUpdateValue,
    value,
    errorMessage,
}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.labelsContainer}>
                <Text
                    style={[styles.label, errorMessage && styles.labelInvalid]}
                >
                    {label}
                </Text>
                {errorMessage && (
                    <Text
                        style={[
                            styles.label,
                            errorMessage && styles.labelInvalid,
                        ]}
                    >
                        : {errorMessage || 'Invalid'}
                    </Text>
                )}
            </View>
            <TextInput
                style={[styles.input, errorMessage && styles.inputInvalid]}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 5,
    },
    labelsContainer: {
        flexDirection: 'row',
    },
    label: {
        color: 'black',
        marginBottom: 4,
    },
    labelInvalid: {
        color: Colors.error500,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        borderWidth: 1,
        fontSize: 16,
    },
    inputInvalid: {
        backgroundColor: Colors.error100,
    },
})

export default Input
