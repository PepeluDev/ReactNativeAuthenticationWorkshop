import { StyleSheet, ImageBackground } from 'react-native'

import { Colors } from '../../constants/Colors'

const WithImageBackground = ({ children }) => {
    return (
        <ImageBackground
            imageStyle={styles.imageBg}
            style={styles.rootContainer}
            source={require('../../../assets/ninjaBackground.png')}
        >
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.green,
    },
    imageBg: {
        height: 300,
        width: 850,
    },
})

export default WithImageBackground
