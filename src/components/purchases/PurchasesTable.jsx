import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import useStockRequest from "../../services/useStockRequest";
import { useSelector } from "react-redux";
import { btnStyle } from "../../styles/globalStyles";

export default function PurchasesTable({ handleOpen, setInfo }) {
  const { deleteStock } = useStockRequest();
  const { purchases } = useSelector((state) => state.stock);

  const getRowId = (row) => row._id;

  //   console.log(purchases);

  const columns = [
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 160,
      headerAlign: "center",
      align: "center",

      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleString("de-DE");
      },
    },
    {
      field: "firmId",
      headerName: "Firm",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",

      renderCell: ({ row }) => row?.firmId?.name,
    },
    {
      field: "brandId",
      headerName: "Brand",
      headerAlign: "center",
      align: "center",
      minWidth: 100,
      flex: 1.1,
      renderCell: ({ row }) => row?.brandId?.name,
    },
    {
      field: "productId",
      headerName: "Product",
      headerAlign: "center",
      align: "center",
      flex: 1.1,
      minWidth: 100,
      renderCell: ({ row }) => row?.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 110,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 110,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      sortable: true,
      headerAlign: "center",
      align: "center",
      width: 110,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      minWidth: 45,
      headerAlign: "center",
      align: "center",
      renderCell: ({
        row: { firmId, brandId, productId, quantity, price, _id },
      }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            sx={btnStyle}
            onClick={() => {
              handleOpen();
              setInfo({
                firmId: firmId ? firmId._id : "",
                brandId: brandId ? brandId._id : "",
                productId: productId ? productId._id : "",
                quantity,
                price,
                _id,
              });
            }}
          />,
          <GridActionsCellItem
            icon={<DeleteForeverIcon />}
            onClick={() => deleteStock("purchases", _id)}
            label="Delete"
            sx={btnStyle}
          />,
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <DataGrid
        rows={purchases}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 75]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
        sx={{
         
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#AACEC8",
            color: "#060608", 
            fontSize:"1.1rem",
          },
         "& .MuiDataGrid-cell":{
          color:"#060608", 
           fontSize:"1rem",
         }}}
      />
    </Box>
  );
}
