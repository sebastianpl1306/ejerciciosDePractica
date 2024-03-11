import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Pagina relacionada a Pricing',
  keywords: ['Pricing', 'Sebastian Pabon', 'información']
};

export default function PricingPage() {
    return (
      <>
          <span className="text-7xl">PricingPage</span>
      </>
    )
  }