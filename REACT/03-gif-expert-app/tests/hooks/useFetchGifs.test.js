import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
    test('El hook no debe devolver imagenes y isLoading en true', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { gifs, isLoading } = result.current;

        expect( gifs.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('El hook debe devoler imagenes y isLoading debe estar en false', async() => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(
            () => expect( result.current.gifs.length ).toBeGreaterThan(0)
        );

        const { gifs, isLoading } = result.current;

        expect( gifs.length ).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy();
    });
})