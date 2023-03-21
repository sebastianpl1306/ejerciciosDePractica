import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onAddNewCategory}) => {
    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChage = ({target}) =>{
        setinputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length < 3 ) return;

        setinputValue('');
        onAddNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input 
                type='text'
                placeholder='Buscar Gifs'
                value={ inputValue }
                onChange={ onInputChage }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddNewCategory: PropTypes.func.isRequired
}