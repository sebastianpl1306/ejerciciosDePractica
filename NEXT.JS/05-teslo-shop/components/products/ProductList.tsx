import { Grid } from '@mui/material';
import { IProduct } from '@/interfaces';
import { ProductCard } from '.';

interface ProductListProps {
  products: IProduct[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <Grid container spacing={4}>
      {
        products.map( product =>(
          <ProductCard key={product.slug} product={product}/>
        ))
      }
    </Grid>
  )
}