import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { initialData } from "@/database/products";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <ShopLayout title={"Tesla-Shop"} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1}}>Todos los productos</Typography>
      <ProductList products={ initialData.products as any }/>
    </ShopLayout>
  )
}
