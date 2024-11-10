import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { Button, Typography } from "@mui/material";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import { useSelector } from "react-redux";
import { ErrorMessage } from "../components/DataFetchMessages";


const Products = () => {
  const { getStock } = useStockRequest();
  const { error } = useSelector((state) => state.stock);

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
      <Typography variant="h4" color={"error"} component="div" mb={2}>
        Product
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ mb: 2 }}
        disabled={error}
      >
        New Product
      </Button>
      {error && <ErrorMessage />}
      {!error && <ProductTable />}
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
