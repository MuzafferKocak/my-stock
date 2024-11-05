import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export default function FirmCard({ firm }) {

    const btnStyle = {
        "&:hover": {color: "red", cursor: "pointer"}
    }
  const { address, _id, name, phone, image } = firm;
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "350px",
        height: "450px",
        p: 2,
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 100 }}
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {address}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {phone}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteOutlineIcon sx={btnStyle} />
        <EditIcon sx={btnStyle} />
      </CardActions>
    </Card>
  );
}
