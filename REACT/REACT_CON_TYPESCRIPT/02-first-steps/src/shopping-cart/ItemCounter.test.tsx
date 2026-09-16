import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = "Test item";

        render(<ItemCounter name={name}/>)

        expect(screen.getByText(name)).toBeDefined();
    })

    test('should render with custom quantity', () => {
        const name = "Test item";
        const quantity = 15;

        render(<ItemCounter name={name} quantity={quantity}/>)

        expect(screen.getByText(quantity)).toBeDefined();
    })

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name="Test item"/>)
        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);

        expect(screen.getAllByText('2')).toBeDefined();
    })

    test('should decrease count when -1 button is pressed', () => {
        const quantity = 5;
        render(<ItemCounter name="Test item" quantity={quantity}/>);

        const [,buttonDecrease] = screen.getAllByRole('button');

        fireEvent.click(buttonDecrease);

        expect(screen.getAllByText('4')).toBeDefined();
    })

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {
        const quantity = 1;
        render(<ItemCounter name="Test item" quantity={quantity}/>);

        const [,buttonDecrease] = screen.getAllByRole('button');

        fireEvent.click(buttonDecrease);

        expect(screen.getAllByText('1')).toBeDefined();
    })

    test('should change to red when count is 1', () => {
        const quantity = 1;
        const name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity}/>);

        const itemByText = screen.getByText(name);

        expect(itemByText.style.color).toBe('red');
    })

    test('should change to black when count is greater than 1', () => {
        const quantity = 2;
        const name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity}/>);

        const itemByText = screen.getByText(name);

        expect(itemByText.style.color).toBe('black');
    })
})