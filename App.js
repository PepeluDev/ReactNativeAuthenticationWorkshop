import { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'expo-status-bar'

import AuthNavigator from './src/screens/auth/AuthNavigator'
import Main from './src/screens/main/Main.js'

import { Colors } from './src/constants/Colors'
import LoadingOverlay from './src/components/ui/LoadingOverlay'

import { AuthContext } from './src/ctx/auth-ctx'
import AuthContextProvider from './src/ctx/auth-ctx'

const Stack = createNativeStackNavigator()

const screenOptions = {
    contentStyle: { backgroundColor: Colors.green },
}

function renderAuthNavigator() {
    return <AuthNavigator screenOptions={screenOptions} />
}

function Root() {
    const authCxt = useContext(AuthContext)

    if (authCxt.authenticatedUser === undefined) {
        return <LoadingOverlay />
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ ...screenOptions, headerShown: false }}
            >
                {authCxt.authenticatedUser ? (
                    <Stack.Screen name="Main" component={Main} />
                ) : (
                    <Stack.Screen name="Auth">
                        {renderAuthNavigator}
                    </Stack.Screen>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const App = () => {
    return (
        <>
            <StatusBar style="auto" />
            <AuthContextProvider>
                <Root />
            </AuthContextProvider>
        </>
    )
}

export default App
