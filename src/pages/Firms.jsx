import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";

const Firms = () => {
  const { getStock } = useStockRequest();
  const { firms } = useSelector((state) => state.stock);
  const [open,setOpen]= useState()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    getStock("firms");
    getStock("sales");
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color={"error"} component="div" mb={2}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Firm</Button>

      <FirmModal open={open} handleClose={handleClose} />

      <Grid container spacing={2} mt={3} justifyContent={"center"}>
        {firms.map((firm) => (
          <Grid item key={firm._id} xs={12} sm={6} md={4}>
            <FirmCard firm={firm} handleOpen={handleOpen} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
