import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, validationsForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [formState])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () =>{
        const formCheckedValues = {};
        for (const nameField of Object.keys(validationsForm)) {
            const [ fn, errorMessage ] = validationsForm[nameField];
            formCheckedValues[`${nameField}Valid`] = fn(formState[nameField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        isFormValid,
        ...formValidation,
    }
}