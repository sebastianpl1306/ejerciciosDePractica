import { useState, useMemo } from 'react';
import NextLink from 'next/link';
import { IProduct } from '@/interfaces';
import { Box, Card, CardActionArea, CardMedia, Grid, Typography, Link } from '@mui/material';

interface ProductCardProps {
  product: IProduct
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
    ? `products/${ product.images[1] }`
    : `products/${ product.images[0] }`
  }, [isHovered, product.images])

  return (
    <Grid item
      xs={ 6 } sm={ 4 }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <Link href={'/product/slug'} component={NextLink} passHref prefetch={ false }>
          <CardActionArea>
            <CardMedia
              component='img'
              image={ productImage }
              alt={ product.title }
              className='fadeIn'
            />
          </CardActionArea>
        </Link>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{ product.title }</Typography>
        <Typography fontWeight={500}>{ `$${product.price}` }</Typography>
      </Box>
    </Grid>
  )
}