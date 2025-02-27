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

const paginationModel = { page: 0, pageSize: 5 };

export default async function ProductTable() {
  const data = await fetch(`${process.env.API_HOST}/products`)
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
