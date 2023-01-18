import { Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './Login'
import Signup from './Signup'

const AuthStack = createNativeStackNavigator()

const headerTitle = (props) => (
    <Image
        style={{ width: 110, height: 50 }}
        resizeMode="contain"
        source={require('../../../assets/ninjaLogo.png')}
    />
)

const AuthNavigator = ({ screenOptions }) => {
    return (
        <AuthStack.Navigator
            screenOptions={{ ...screenOptions, headerTitle: headerTitle }}
        >
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Signup" component={Signup} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator
