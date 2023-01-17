import { Pressable, StyleSheet, Text, View } from 'react-native'

const FlatButton = ({ children, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={onPress}
        >
            <View>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 2,
        paddingHorizontal: 12,
    },
    pressed: {
        opacity: 0.5,
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
    },
})

export default FlatButton
