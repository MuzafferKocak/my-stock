import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle } from "../styles/globalStyles";
import useStockRequest from "../services/useStockRequest";
import { CardHeader } from "@mui/material";

export default function BrandCard({ brand }) {
  const { deleteStock } = useStockRequest();

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "350px",
        height: "450px",
        p: 2,
      }}
    >
      <CardHeader title={brand?.name} />
      <CardMedia
        component="img"
        sx={{ p: 1, objectFit: "contain", height: "250px" }}
        image={brand.image}
        alt={""}
      />
      <CardActions>
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStock("brands", brand._id)}
        />
        <EditIcon sx={btnStyle} />
      </CardActions>
    </Card>
  );
}
