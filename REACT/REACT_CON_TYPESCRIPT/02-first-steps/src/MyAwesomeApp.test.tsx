import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp"

describe('MyAwesomeApp', () => {
    test('Should render firstname and lastname', () => {
        render(<MyAwesomeApp />);
        const h1 = screen.getByTestId('title-h1')

        expect(h1?.innerHTML).toContain('Sebastian');
    })

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    })
})