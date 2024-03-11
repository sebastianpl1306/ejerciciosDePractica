import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Pagina relacionada a Contacto',
  keywords: ['Contacto', 'Sebastian Pabon', 'información']
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">ContactPage</span>
    </>
  )
  }