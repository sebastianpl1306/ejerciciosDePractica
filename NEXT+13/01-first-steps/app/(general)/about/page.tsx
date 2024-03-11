import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Sobre nosotros',
 description: 'Pagina relacionada a Sobre nosotros',
 keywords: ['Sobre nosotros', 'Sebastian Pabon', 'información']
};

export default function AboutPage() {
  return (
    <span className="text-7xl">AboutPage</span>
  )
}