import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'row.category.name',
    headerName: 'Category',
    valueGetter: (value, row) => `${row?.category?.name || ''}`,
    width: 150,
  },
  {
    field: 'row?.tags?.[3].name',
    headerName: 'City',
    valueGetter: (value, row) => `${row?.tags?.[3].name || ''}`,
    width: 150,
  },
  {
    field: 'row?.tags?.[2].name',
    headerName: 'State',
    valueGetter: (value, row) => `${row?.tags?.[2].name || ''}`,
    width: 150,
  },
];


export default function GridView({ pets }) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={pets}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}