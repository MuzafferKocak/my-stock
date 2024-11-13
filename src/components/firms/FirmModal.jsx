import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { modalStyle } from "../../styles/globalStyles";
import useStockRequest from "../../services/useStockRequest";

export default function FirmModal({ open, handleClose, info, setInfo }) {
  const { postStock, putStock } = useStockRequest();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putStock("firms", info);
    } else {
      postStock("firms", info);
    }

    handleClose();
  };
  //   console.log(info);

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
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              value={info.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              value={info.phone}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              value={info.address}
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
              {info._id ? "UPDATE FIRM" : "ADD FIRM"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
