'use server'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, sortable: false},
  { field: 'title', headerName: 'Title', width: 130, sortable: false},
  { field: 'price', headerName: 'Price', width: 130, sortable: false},
  { field: 'category', headerName: 'Category', width: 90, sortable: false },
  { field: 'description', headerName: 'Description', width: 160, sortable: false},
];

const rows = [
  { id: 1, title: 'Snow', price: 'Jon', category: 35 },
  { id: 2, title: 'Lannister', price: 'Cersei', category: 42 },
  { id: 3, title: 'Lannister', price: 'Jaime', category: 45 },
  { id: 4, title: 'Stark', price: 'Arya', category: 16 },
  { id: 5, title: 'Targaryen', price: 'Daenerys', category: null },
  { id: 6, title: 'Melisandre', price: null, category: 150 },
  { id: 7, title: 'Clifford', price: 'Ferrara', category: 44 },
  { id: 8, title: 'Frances', price: 'Rossini', category: 36 },
  { id: 9, title: 'Roxie', price: 'Harvey', category: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default async function ProductTable() {
  const data = await fetch('https://fakestoreapi.com/products')
  const products = await data.json()

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
