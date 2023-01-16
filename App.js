import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const App = () => {
    return (
        <>
            <StatusBar style="auto" />
            <SafeAreaView style={styles.rootContainer}>
                <Text>¡Hello World!</Text>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default App
