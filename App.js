import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'expo-status-bar'

import AuthNavigator from './src/screens/auth/AuthNavigator'
import Main from './src/screens/main/Main.js'

import { Colors } from './src/constants/Colors'

const Stack = createNativeStackNavigator()

const screenOptions = {
    contentStyle: { backgroundColor: Colors.green },
}

function renderAuthNavigator() {
    return <AuthNavigator screenOptions={screenOptions} />
}

const App = () => {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ ...screenOptions, headerShown: false }}
                >
                    <Stack.Screen name="Auth">
                        {renderAuthNavigator}
                    </Stack.Screen>
                    <Stack.Screen name="Main" component={Main} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default App
