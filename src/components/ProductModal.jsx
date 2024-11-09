import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { modalStyle } from "../styles/globalStyles";
import useStockRequest from "../services/useStockRequest";

import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose, info, setInfo }) {
  const { postStock } = useStockRequest();
  const { categories, brands } = useSelector((state) => state.stock);
  

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("products", info);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="categoryId">Categories</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                name="categoryId"
                label="Categories"
                value={info.categoryId || ""}
                onChange={handleChange}
                required
              >
                {categories.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brandId">Brands</InputLabel>
              <Select
                labelId="brandId"
                id="brandId"
                name="brandId"
                label="Brands"
                value={info.brandId || ""}
                onChange={handleChange}
                required
              >
                {brands.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Name"
              name="name"
              id="name"
              type="text"
              value={info.name || ""}
              onChange={handleChange}
              variant="outlined"
              required
            />

            <Button type="submit" variant="contained" size="large">
              ADD PRODUCT
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
