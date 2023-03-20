import { useState } from "react"

export const AddCategory = ({onAddNewCategory}) => {
    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChage = ({target}) =>{
        setinputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length < 3 ) return;

        onAddNewCategory(inputValue);
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type='text'
                placeholder='Buscar Gifs'
                value={ inputValue }
                onChange={ onInputChage }
            />
        </form>
    )
}