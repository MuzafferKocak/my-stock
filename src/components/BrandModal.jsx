import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { modalStyle } from "../styles/globalStyles";
import useStockRequest from "../services/useStockRequest";

export default function BrandModal({ open, handleClose, info, setInfo }) {
  const { postStock } = useStockRequest();

  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("brands", info);
    handleClose();
  };
  // console.log(info);
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
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
          <TextField
            label="Brand Name"
            name="name"
            id="name"
            type="text"
            value={info.name}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <TextField
            label="Image Url"
            name="image"
            id="image"
            type="url"
            value={info.image}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained" size="large">
            Save Brand
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
