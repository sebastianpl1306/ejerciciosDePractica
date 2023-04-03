import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../../src/hooks';

describe('Pruebas en el useCounter()', () => {
    test('Debe de retornar los valores por defecto', () => {
        const { result } = renderHook(()=>useCounter());
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual( expect.any( Function ));
        expect(decrement).toEqual( expect.any( Function ));
        expect(reset).toEqual( expect.any( Function ));
    })

    test('Debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    })

    test('Debe de incrementar el valor del counter', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { counter, increment } = result.current;

        act(()=>{
            increment(1);
            increment(2);
        })

        expect(result.current.counter).toBe(103);
    })

    test('Debe de decrementar el valor del counter', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { counter, decrement } = result.current;

        act(()=>{
            decrement(1);
            decrement(2);
        })

        expect(result.current.counter).toBe(98);
    })

    test('Debe de resetear el valor del counter', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { counter, decrement, reset } = result.current;

        act(()=>{
            decrement(1);
            decrement(2);
            reset();
        })

        expect(result.current.counter).toBe(100);
    })
})