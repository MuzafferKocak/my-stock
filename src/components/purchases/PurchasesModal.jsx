import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { modalStyle } from "../../styles/globalStyles";
import useStockRequest from "../../services/useStockRequest";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PurchasesModal({ open, handleClose, info, setInfo }) {
  const navigate = useNavigate();
  const { postStock, putStock } = useStockRequest();
  const { firms, brands, products } = useSelector((state) => state.stock);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStock("purchases", info);
    } else {
      postStock("purchases", info);
    }
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
              <InputLabel variant="outlined" id="firmId">
                Firm
              </InputLabel>
              <Select
                labelId="firm-select-label"
                id="firm-select"
                name="firmId"
                label="Firm"
                value={info.firmId || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/firms")}>
                  Add New Firm
                </MenuItem>
                {firms.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brandId" variant="outlined">
                Brands
              </InputLabel>
              <Select
                labelId="brand-select-label"
                id="brand-select"
                name="brandId"
                label="Brand"
                value={info.brandId || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/brands")}>
                  Add New Brand
                </MenuItem>
                {brands.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="productId" variant="outlined">
                Product
              </InputLabel>
              <Select
                labelId="product-select-label"
                id="product-select"
                name="productId"
                label="Product"
                value={info.productId || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/products")}>
                  Add New Product
                </MenuItem>
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
              {info?._id ? "UPDATE PURCHASES" : "ADD NEW PURCHASES"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
