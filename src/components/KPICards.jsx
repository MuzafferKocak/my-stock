import Paper from "@mui/material/Paper";
import EuroIcon from "@mui/icons-material/Euro";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { LocalMall, ShoppingBasket } from "@mui/icons-material";
import { amber, deepPurple, pink } from "@mui/material/colors";
import { useSelector } from "react-redux";

const KPICards = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = sales?.reduce((acc, sale) => acc + sale.amount, 0);
  const totalPurchases = purchases?.reduce(
    (acc, purchases) => acc + purchases.amount,
    0
  );

  const kpiData = [
    {
      id: 1,
      title: "Sales",
      icon: <EuroIcon sx={{ fontSize: "1.8rem" }} />,
      amount: totalSales.toLocaleString("de-DE") + "€",
      color: deepPurple[700],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "Profit",
      icon: <ShoppingBasket sx={{ fontSize: "1.8rem" }} />,
      amount: (totalSales - totalPurchases).toLocaleString("de-DE") + "€",
      color: pink[700],
      bgColor: pink[100],
    },
    {
      id: 3,
      title: "Purchases",
      icon: <LocalMall sx={{ fontSize: "1.8rem" }} />,
      amount: totalPurchases.toLocaleString("de-DE") + "€",
      color: amber[700],
      bgColor: amber[100],
    },
  ];

  return (
    <Stack
      justifyContent={"center"}
      alignContent={"center"}
      flexWrap={"wrap"}
      direction={"row"}
      gap={2}
    >
      {kpiData.map((data) => (
        <Paper
          key={data.id}
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: 255,
            p: 2,
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: data.bgColor,
              color: data.color,
              width: 60,
              height: 60,
            }}
          >
            {data.icon}
          </Avatar>
          <Box>
            <Typography variant="button">{data.title}</Typography>
            <Typography variant="h5">{data.amount}</Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default KPICards;
