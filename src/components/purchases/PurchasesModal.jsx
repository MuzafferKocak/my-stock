import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { modalStyle } from "../../styles/globalStyles";
import useStockRequest from "../../services/useStockRequest";

import { useSelector } from "react-redux";

export default function PurchasesModal({ open, handleClose, info, setInfo }) {
  const { postStock } = useStockRequest();
  const { firms, brands, products } = useSelector((state) => state.stock);

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
              <InputLabel variant="outlined" id="firm">Firm</InputLabel>
              <Select
                labelId="firm"
                id="firmId"
                name="firmId"
                label="Firm"
                value={info.firmId?._id || info?.firmId}
                onChange={handleChange}
                required
              >
                {firms.map((item) => (
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
                value={info.brandId || info.brandId}
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
            <FormControl fullWidth>
              <InputLabel id="productId">Product</InputLabel>
              <Select
                labelId="productId"
                id="productId"
                name="productId"
                label="Product"
                value={info.productId || info.productId}
                onChange={handleChange}
                required
              >
                {products.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Quantity"
              name="quantity"
              id="quantity"
              type="text"
              value={info.quantity || ""}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Price"
              name="price"
              id="price"
              type="text"
              value={info.price || ""}
              onChange={handleChange}
              variant="outlined"
              required
            />

            <Button type="submit" variant="contained" size="large">
              ADD NEW PURCHASES
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
