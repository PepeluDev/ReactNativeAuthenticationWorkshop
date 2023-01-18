import { StyleSheet, Text, View } from 'react-native'
import WithImageBackground from '../helpers/WithImageBackground'

const Signup = () => {
    return (
        <WithImageBackground>
            <View style={styles.rootContainer}>
                <Text>This is the SIGNUP screen</Text>
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
export default Signup
