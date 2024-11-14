import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ErrorMessage } from "../components/DataFetchMessages";
import PurchasesTable from "../components/purchases/PurchasesTable";
import PurchasesModal from "../components/purchases/PurchasesModal";

const Purchases = () => {
  const { getStock, getStockData } = useStockRequest();
  const { error } = useSelector((state) => state.stock);

  const [open, setOpen] = useState();
  const handleOpen = () => setOpen(true);

  const initialState = {
    firmId: "",
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
    // getStock("products");
    // getStock("purchases");
    // getStock("brands");
    // getStock("firms");
    getStockData()
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color={"error"} component="div" mb={2}>
        Purchases
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ mb: 2 }}
        disabled={error}
      >
        New Purchases
      </Button>
      {error && <ErrorMessage />}
      {!error && <PurchasesTable setInfo={setInfo} handleOpen={handleOpen} />}
      <PurchasesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
    </div>
  );
};

export default Purchases;
