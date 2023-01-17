import { Controller } from 'react-hook-form'
import Input from './Input'

const ControlledInput = ({
    control,
    name,
    rules,
    label,
    keyboardType,
    secure,
}) => {
    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
            }) => (
                <Input
                    label={label}
                    onUpdateValue={onChange}
                    value={value}
                    keyboardType={keyboardType}
                    secure={secure}
                    errorMessage={error && error.message}
                />
            )}
        />
    )
}

export default ControlledInput
