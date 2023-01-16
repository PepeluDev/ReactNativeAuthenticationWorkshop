import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './Login'
import Signup from './Signup'

const AuthStack = createNativeStackNavigator()

const AuthNavigator = ({ screenOptions }) => {
    return (
        <AuthStack.Navigator screenOptions={screenOptions}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Signup" component={Signup} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator
