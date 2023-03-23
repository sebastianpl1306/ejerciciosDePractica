import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Probando en <GifGrid/>', () => {
    const category = 'One Punch';
    const gifs = [
        {
            id: '123',
            title: 'One Punch',
            url: 'https://imagen_one_punch.gif'
        },
        {
            id: '321',
            title: 'Dragon Ball',
            url: 'https://imagen_dragon_ball.gif'
        }
    ]

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);

        expect( screen.getByText('Cargando...')).toBeTruthy();
        expect( screen.getByText(category));
    })

    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: true
        });

        render(<GifGrid category={ category }/>);

        expect( screen.getAllByRole('img').length ).toBe(2)
    })
})