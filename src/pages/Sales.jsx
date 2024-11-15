import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ErrorMessage } from "../components/DataFetchMessages";

import SalesTable from "../components/sales/SalesTable";
import SalesModal from "../components/sales/SalesModal";

const Sales = () => {
  const { getStock } = useStockRequest();
  const { error } = useSelector((state) => state.stock);

  const [open, setOpen] = useState();
  const handleOpen = () => setOpen(true);

  const initialState = {
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  };

  const [info, setInfo] = useState(initialState);

  const handleClose = () => {
    setOpen(false);
    setInfo(initialState);
  };

  useEffect(() => {
    getStock("products");
    getStock("sales");
    getStock("brands");
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color={"#07473C"} component="div" mb={2}>
        Sales
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
        New Sales
      </Button>
      {error && <ErrorMessage />}
      {!error && <SalesTable setInfo={setInfo} handleOpen={handleOpen} />}
      <SalesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
    </div>
  );
};

export default Sales;
