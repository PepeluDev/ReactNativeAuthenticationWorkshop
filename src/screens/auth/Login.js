import { StyleSheet, Text, View } from 'react-native'
import WithImageBackground from '../helpers/WithImageBackground'

const Login = ({ navigation }) => {
    return (
        <WithImageBackground>
            <View style={styles.rootContainer}>
                <Text>This is the LOGIN screen</Text>
            </View>
        </WithImageBackground>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
    },
})
export default Login
