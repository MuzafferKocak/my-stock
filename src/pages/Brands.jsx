import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BrandCard from "../components/brand/BrandCard";
import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";
import BrandModal from "../components/brand/BrandModal";

const Brands = () => {
  const { getStock } = useStockRequest();
  const { brands, error } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({ name: "", image: "" });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", image: "" });
  };

  useEffect(() => {
    getStock("brands");
  }, []); // eslint-disable-line

  return (
    <Box>
      <Typography variant="h4" color={"#07473C"} component="div" mb={2}>
        Brands
      </Typography>
      <Button
        variant="contained"
        onClick={handleOpen}
        disabled={error}
        sx={{ bgcolor: "#23453F", "&:hover": { backgroundColor: "#1D8574" } }}
      >
        New Brands
      </Button>

      <Grid container spacing={2} mt={3} justifyContent={"center"}>
        {brands.map((brand) => (
          <Grid item key={brand._id} xs={12} sm={6} md={4}>
            <BrandCard
              brand={brand}
              handleOpen={handleOpen}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
    </Box>
  );
};

export default Brands;
