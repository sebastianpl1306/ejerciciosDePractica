import { renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks'
import { act } from 'react-dom/test-utils'

describe('Pruebas en useForm', () => {
    const initialValue = {
        name: 'sebastian',
        email: 'sebastian@example.com',
        password: '12345'
    }

    test('Probar los valores por defecto', () => {
        const { result } = renderHook( () => useForm(initialValue));

        expect(result.current).toEqual({
            name: 'sebastian',
            email: 'sebastian@example.com',
            password: '12345',
            userForm: { name: 'sebastian', email: 'sebastian@example.com', password: '12345' },
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    })

    test('Debe de cambiar el valor name en el formulario', () => {
        const { result } = renderHook( () => useForm(initialValue));
        const { onInputChange } = result.current;

        const newName = 'sebas';
        act(()=>{
            onInputChange({
                target:{
                    name: 'name',
                    value: newName
                }
            });
        })

        expect(result.current.name).toBe(newName);
        expect(result.current.userForm.name).toBe(newName);
    })

    test('Debe de limpiar los valores del form', () => {
        const { result } = renderHook( () => useForm(initialValue));
        const { onInputChange, onResetForm } = result.current;

        const newName = 'sebas';
        act(()=>{
            onInputChange({
                target:{
                    name: 'name',
                    value: newName
                }
            });
            onResetForm();
        })

        expect(result.current.name).toBe(initialValue.name);
        expect(result.current.userForm.name).toBe(initialValue.name);
    })
})