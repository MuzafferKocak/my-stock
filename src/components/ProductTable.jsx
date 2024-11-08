import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridActionsCellItem,
  
} from "@mui/x-data-grid";
import GridDeleteForeverIcon from "@mui/icons-material/DeleteForever"
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";



export default function ProductTable() {
  const { deleteStock } = useStockRequest();
  const {products} = useSelector((state)=>state.stock)
  const getRowId = (row)=> row._id
  const columns = [
    { field: "_id", headerName: "#", width: 90 },
    {
      field: "categoriesId",
      headerName: "Categories",
      flex: 1,
      minWidth: 100,
      valueGetter: (value)=> value?.name,
    },
    {
      field: "brandId",
      headerName: "Brands",
      headerAlign: "center",
      align: "center",
      width: 150,
      flex: 1.2,
      valueGetter: (value)=> value?.name,
    },
    {
      field: "name",
      headerName: "Name",
      headerAlign: "center",
      align: "center",
      flex: 1.1,
      miWidth: 110,
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 160,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<GridDeleteForeverIcon />}
          onclick={() => deleteStock("products", props.id)}
          label="Delete"
        />,
      ],
    },
  ];


  return (
    <Box sx={{ width: "100%", mt:3 }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
