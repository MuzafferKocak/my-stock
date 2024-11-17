import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { Button, Typography } from "@mui/material";
import ProductTable from "../components/products/ProductTable";
import ProductModal from "../components/products/ProductModal";
import { useSelector } from "react-redux";
import { ErrorMessage, TableSkeleton } from "../components/DataFetchMessages";

const Products = () => {
  const { getStock } = useStockRequest();
  const { products, loading, error } = useSelector((state) => state.stock);

  const [open, setOpen] = useState();
  const handleOpen = () => setOpen(true);

  const initialState = { categoryId: "", brandId: "", name: "" };

  const [info, setInfo] = useState(initialState);

  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    getStock("products");
    getStock("categories");
    getStock("brands");
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color={"#07473C"} component="div" mb={2}>
        Product
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          mb: 2,
          bgcolor: "#23453F",
          "&:hover": { backgroundColor: "#1D8574" },
        }}
        disabled={error}
      >
        New Product
      </Button>

      {loading && (
        <TableSkeleton>
          <ProductTable />
        </TableSkeleton>
      )}

      {!loading && !products?.length && <ErrorMessage />}

      {!loading && products?.length > 0 && <ProductTable />}
      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
    </div>
  );
};

export default Products;
