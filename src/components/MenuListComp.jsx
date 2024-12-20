import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/mek.png";
import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MenuListComp = () => {
  const navigate = useNavigate();

  const icons = [
    {
      title: "Dashboard",
      iconName: <DashboardCustomizeIcon />,
      path: "/stock",
    },
    {
      title: "Purchases",
      iconName: <ShoppingCartIcon />,
      path: "/stock/purchases/",
    },
    {
      title: "Sales",
      iconName: <AttachMoneyIcon />,
      path: "/stock/sales/",
    },
    {
      title: "Firms",
      iconName: <StoreIcon />,
      path: "/stock/firms/",
    },
    {
      title: "Brands",
      iconName: <StarsIcon />,
      path: "/stock/brands/",
    },
    {
      title: "Products",
      iconName: <InventoryIcon />,
      path: "/stock/products/",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 65,
          width: 65,
          border: 2,
          color: "white",
          borderRadius: "50%",
          marginBottom: 2,
        }}
        alt="logo"
        src={Logo}
      />

      <List>
        {icons.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path)}
            sx={{
              color: "#39070F",
              "& .MuiSvgIcon-root": { color: "#39070F", fontSize: "1.7rem" },
              "&:hover": { color: "#D53535" },
              "&:hover .MuiSvgIcon-root": { color: "#D53535" },
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item.iconName}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginTop: { xs: 5, md: 8, lg: 10 },
        }}
      >
        <IconButton
          component="a"
          href="https://github.com/MuzafferKocak"
          target="_blank"
          sx={{ color: "#39070F", "&:hover": { color: "#D53535" } }}
        >
          <GitHubIcon sx={{ fontSize: "2.2rem" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/muzaffer-kocak/"
          target="_blank"
          sx={{ color: "#39070F", "&:hover": { color: "#D53535" } }}
        >
          <LinkedInIcon sx={{ fontSize: "2.2rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MenuListComp;
