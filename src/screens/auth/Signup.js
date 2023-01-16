import { StyleSheet, Text, View } from 'react-native'

const Signup = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>This is the SIGNUP screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default Signup
