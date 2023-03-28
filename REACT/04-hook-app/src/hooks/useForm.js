import { useState } from 'react';

export const useForm = (initialValue) => {
    const [userForm, setUserForm] = useState(initialValue);

    const onInputChange = ({target}) =>{
        const { name, value } = target;

        setUserForm({
            ...userForm,
            [name]: value
        });
    }

    const onResetForm = () => {
        setUserForm(initialValue)
    }

    return {
        ...userForm,
        userForm,
        onInputChange,
        onResetForm
    }
}
