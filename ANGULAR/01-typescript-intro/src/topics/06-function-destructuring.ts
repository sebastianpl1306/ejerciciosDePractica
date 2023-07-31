export interface Product {
    description: string;
    price: number;
}

interface TaxCalcultionOptions {
    tax: number;
    products: Product[];
}

const phone: Product ={
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad',
    price: 250.0
}

export function taxCalculation( { products, tax}: TaxCalcultionOptions ): [number, number] {
    let total = 0;

    products.forEach( ({ price }) =>{
        total = total + price;
        total += price;
    });

    return [ total, total * tax ];
}

const shoppingCart = [ phone, tablet ];
const tax = 0.15;

const [total, taxCalculado]: number[] = taxCalculation({ products: shoppingCart, tax});

console.log('Total', total);
console.log('Tax', taxCalculado);

export {}