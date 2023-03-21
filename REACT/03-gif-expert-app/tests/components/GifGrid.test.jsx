import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";

describe('Probando en <GifGrid/>', () => {
    const category = 'One Punch';
    test('Debe de mostrar el loading inicialmente', () => {
        render(<GifGrid category={ category }/>);

        expect( screen.getByText('Cargando...')).toBeTruthy();
        expect( screen.getByText(category));
    })
})