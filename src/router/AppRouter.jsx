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

const AppRouter = () => {
  const background = {
    backgroundColor: "#c8c3cc",
    minHeight: "100vh",
    margin: 0,
  };
  return (
    <>
      <Router>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <Box sx={background}>
                <Login />
              </Box>
            }
          />
          <Route
            path="register"
            element={
              <Box sx={background}>
                <Register />
              </Box>
            }
          />

          <Route
            path="stock"
            element={
              <Box
                sx={{
                  backgroundColor: "#c8c3cc",
                  color: "#060608",
                  minHeight: "100vh",
                  margin: 0,
                }}
              >
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
