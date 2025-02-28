'use server'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { PRODUCT_PAGINATION } from './constants';
import { IProduct } from '../types';

const hedaers: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, sortable: false, filterable: false,  },
  { field: 'title', headerName: 'Title', width: 200, sortable: false, filterable: false  },
  { field: 'price', headerName: 'Price', width: 130, filterable: false },
  { field: 'category', headerName: 'Category', width: 190, sortable: false},
  { field: 'description', headerName: 'Description', width: 400, sortable: false, filterable: false },
];

const BaseProductTable: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        disableColumnSelector
        rows={products}
        columns={hedaers}
        initialState={{ pagination: { paginationModel: PRODUCT_PAGINATION } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default BaseProductTable