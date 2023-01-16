import { StyleSheet, Text, View } from 'react-native'

const Login = ({ navigation }) => {
    return (
        <View style={styles.rootContainer}>
            <Text>This is the LOGIN screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default Login
