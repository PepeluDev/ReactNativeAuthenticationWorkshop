import { StyleSheet, Text, View } from 'react-native'

const Main = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>This is the MAIN screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default Main
