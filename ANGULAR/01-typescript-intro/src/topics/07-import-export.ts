import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Hokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    },
]

const tax = 0.15;
const [total, taxCalculado]: number[] = taxCalculation({ products: shoppingCart, tax});

console.log('Total', total);
console.log('Tax', taxCalculado);