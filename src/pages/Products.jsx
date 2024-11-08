import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";

const Firms = () => {
  const { getStock } = useStockRequest();
  const {  } = useSelector((state) => state.stock);
  const [open, setOpen] = useState();
  const handleOpen = () => setOpen(true);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    image: "",
    address: "",
  });

  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      image: "",
      address: "",
    });
  };

  useEffect(() => {
    getStock("products");
    
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color={"error"} component="div" mb={2}>
        Product
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{mb:3}}>
        New Product
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

     <ProductTable/>
    </div>
  );
};

export default Firms;
