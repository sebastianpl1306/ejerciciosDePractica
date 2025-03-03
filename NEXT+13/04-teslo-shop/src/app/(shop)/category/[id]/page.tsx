import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Category } from "@/interfaces";

interface Props {
  params: {
    id: Category
  }
}

const products = initialData.products;

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const labels: Record<Category, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Para Todos'
  }

  // if( id === 'kids' ) {
  //   notFound();
  // }

  return (
    <>
      <Title title={`Artículos de ${labels[id]}`} className='mb-2'/>
      <ProductGrid products={products.filter((({gender}) => gender === id))}/>
    </>
  );
}