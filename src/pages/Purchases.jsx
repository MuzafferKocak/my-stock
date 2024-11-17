import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ErrorMessage, TableSkeleton } from "../components/DataFetchMessages";
import PurchasesTable from "../components/purchases/PurchasesTable";
import PurchasesModal from "../components/purchases/PurchasesModal";

const Purchases = () => {
  const { getStockData } = useStockRequest();
  const { purchases, loading, error } = useSelector((state) => state.stock);

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
    getStockData();
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color={"#07473C"} component="div" mb={2}>
        Purchases
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
        New Purchases
      </Button>

      {loading && (
        <TableSkeleton>
          <PurchasesTable />
        </TableSkeleton>
      )}

      {!loading && !purchases?.length && <ErrorMessage />}

      {!loading && purchases?.length > 0 && (
        <PurchasesTable setInfo={setInfo} handleOpen={handleOpen} />
      )}
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
