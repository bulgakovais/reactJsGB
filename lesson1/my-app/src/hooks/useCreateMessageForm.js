import { useCallback, useState } from 'react';

export const useCreateMessageForm = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('')

    const resetInputValue = useCallback(() => {
        setInputValue('')
    }, [])

    const onChangeInput = useCallback((event) => {
        setInputValue(event.target.value)
    })

    const handleSubmit = useCallback((event) => {
        // отменяем действие по умолчанию
        event.preventDefault()
        onSubmit(inputValue, 'user')
        resetInputValue()
    }, [inputValue, onSubmit, resetInputValue])

    return {
        inputValue,
        resetInputValue,
        onChangeInput,
        handleSubmit
    }


}