import { KeyboardAvoidingView, ScrollView } from 'react-native'

const WithKeyboardAvoidingView = ({ children, contentContainerStyle }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView
                alwaysBounceVertical={false}
                contentContainerStyle={contentContainerStyle}
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default WithKeyboardAvoidingView
