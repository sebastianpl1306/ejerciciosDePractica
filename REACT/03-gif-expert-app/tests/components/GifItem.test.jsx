import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components"

describe('Pruebas en <GifItem/>', () => {
    const title = 'One Punch';
    const url = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Q5MGJkOGIyYTc2MmQ1YjUwNjRkMmE4ZjY1ZWFlZWZmNTI3MzczYSZjdD1n/yo3TC0yeHd53G/giphy.gif';

    test('Snapshopt del componente', () => {
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    })

    test('El src y el alt deben tener su url y titulo respectivo', () => {
        render(<GifItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('El texto del titulo debe estar presente en el componente', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})