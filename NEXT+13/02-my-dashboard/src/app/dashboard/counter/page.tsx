import { CartCounter } from '@/shopping-cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CounterPage',
  description: 'Counter page descripción'
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carro de compras</span>
      <CartCounter initialValue={20}/>
    </div>
  );
}