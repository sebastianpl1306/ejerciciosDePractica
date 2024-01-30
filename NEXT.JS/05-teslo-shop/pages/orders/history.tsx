import NextLink from 'next/link';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Typography, Grid, Chip, Link } from '@mui/material';

import { ShopLayout } from "@/components/layouts"

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullName', headerName: 'Nombre Completo', width: 300 },
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si esta pagada o no',
        width: 200,
        renderCell: ( params ) =>{
            return (
                params.row.paid 
                    ? <Chip color="success" label="Pagada" variant="outlined"/>
                    : <Chip color="error" label="No Pagada" variant="outlined"/>
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver Orden',
        width: 200,
        renderCell: ( params ) =>(
            <Link href={`/orders/${params.row.id}`} component={NextLink} passHref underline='always'>Ver Orden</Link>
        ),
        sortable: false
    },
]

const rows = [
    { id: 1, paid: true, fullName: 'Sebastian Pabon'},
    { id: 2, paid: false, fullName: 'Enrique Pabon'},
    { id: 3, paid: true, fullName: 'Gladys Lopez'},
    { id: 4, paid: false, fullName: 'Isabela Pabon'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title="Historial de ordenes" pageDescription="Historial de ordenes del cliente">
        <Typography variant="h1" component="h1">Historial de ordenes</Typography>
        <Grid item xs={ 12 } sx={{ height: 650, width: '100%' }}>
            <DataGrid
                rows={ rows }
                columns={ columns }
                initialState={{
                    pagination: { 
                      paginationModel: { pageSize: 5 } 
                    },
                }}
                pageSizeOptions={[5, 10, 25]}
            />
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage