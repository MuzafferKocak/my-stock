import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FirmCard from "../components/firms/FirmCard";
import FirmModal from "../components/firms/FirmModal";
import { CardSkeleton, ErrorMessage } from "../components/DataFetchMessages";
import BrandCard from "../components/brand/BrandCard";

const Firms = () => {
  const { getStock } = useStockRequest();
  const { firms, error, loading } = useSelector((state) => state.stock);
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
    getStock("firms");
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color={"#07473C"} component="div" mb={2}>
        Firms
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          mb: 1,
          bgcolor: "#23453F",
          "&:hover": { backgroundColor: "#1D8574" },
        }}
        disabled={error}
      >
        New Firm
      </Button>

      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      {loading && (
        <CardSkeleton>
          <BrandCard />
        </CardSkeleton>
      )}

      {!loading && !firms?.length && <ErrorMessage />}

      {!loading && firms?.length > 0 && (
        <Grid container spacing={2} mt={3} justifyContent={"center"}>
          {firms.map((firm) => (
            <Grid item key={firm._id} xs={12} sm={6} md={4}>
              <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Firms;
