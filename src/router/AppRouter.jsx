import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Sales from "../pages/Sales";
import Purchases from "../pages/Purchases";
import Products from "../pages/Products";
import Brands from "../pages/Brands";
import Firms from "../pages/Firms";
import { Box, CssBaseline } from "@mui/material";
import { background, backgroundStyle } from "../styles/globalStyles";

const AppRouter = () => {
  return (
    <>
      <Router>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <Box sx={backgroundStyle}>
                <Login />
              </Box>
            }
          />
          <Route
            path="register"
            element={
              <Box sx={backgroundStyle}>
                <Register />
              </Box>
            }
          />

          <Route
            path="stock"
            element={
              <Box sx={background}>
                <PrivateRouter />
              </Box>
            }
          >
            <Route path="" element={<Dashboard />}>
              <Route index element={<Home />} />
              <Route path="sales" element={<Sales />} />
              <Route path="purchases" element={<Purchases />} />
              <Route path="products" element={<Products />} />
              <Route path="firms" element={<Firms />} />
              <Route path="brands" element={<Brands />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
