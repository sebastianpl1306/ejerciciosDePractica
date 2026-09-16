import { expect, test, describe } from 'vitest';
import { add, subtract, multiply, divide } from './math.helper';

describe('add', () => {
    test('should add two numbers correctly', () => {
        const result = add(1, 1);
        expect(result).toBe(2);
    });

    test('should send NaN if one number is string', () => {
        const result = add(1, 'asd');
        expect(result).toBe(NaN);
    })
})

describe('substract', () => {
    test('should substract two numbers correcttly', () => {
        const a = 2;
        const b = 1;

        const result = subtract(a, b);

        expect(result).toBe(1);
    })

    test('should substract two negative numbers correcttly', () => {
        const a = -2;
        const b = -1;

        const result = subtract(a, b);

        expect(result).toBe(-1);
    })
})

describe('multiply', () => {
    test('should multiply two numbers correcttly', () => {
        const a = 2;
        const b = 2;

        const result = multiply(a,b);

        expect(result).toBe(4);
    })
})

describe('divide', () => {
    test('should divide two numbers correcttly', () => {
        const a = 2;
        const b = 2;

        const result = divide(a,b);

        expect(result).toBe(a / b);
    })
})