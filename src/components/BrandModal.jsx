import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { modalStyle } from "../styles/globalStyles";

export default function BrandModal({open, handleClose, info, setInfo}) {
  

  return (
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Brand Name"
              name="name"
              id="name"
              type="text"
              value={info.name}
              variant="outlined"
              required
            />
            <TextField
              label="Image Url"
              name="image"
              id="image"
              type="url"
              value={info.image}
              variant="outlined"
              required
              
            />
          </Box>

          <Button type="submit" variant="contained" size="large" sx={{mt:2}}>Save Brand</Button>
        </Box>
      </Modal>
    
  );
}
