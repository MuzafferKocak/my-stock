import * as React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography } from "@mui/material";

const dataFormatter = (number) => `$${Intl.NumberFormat("us").format(number)}`;

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData =
    sales?.map((item) => ({
      Date: new Date(item.createdAt).toLocaleDateString("de-DE"),
      Amount: item.amount,
    })) || [];

  const purchasesData =
    purchases?.map((item) => ({
      Date: new Date(item.createdAt).toLocaleDateString("de-DE"),
      Amount: item.amount,
    })) || [];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        mt: 5,
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "49%" },
          bgcolor: "#E9EBF8",
          border: 2,
          borderRadius: "10px",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontWeight: "bold",
            color: "#502F4C",
            textAlign: "center",
            p: 1,
          }}
        >
          Total Sales (€)
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Date"
              label={{ value: "", position: "insideBottomRight" }}
            />
            <YAxis tickFormatter={(value) => `€${value}`} />
            <Tooltip formatter={(value) => dataFormatter(value)} />
            <Legend />
            <Line
              type="monotone"
              dataKey="Amount"
              stroke="#502F4C"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "49%" },
          bgcolor: "#E9EBF8",
          border: 2,
          borderRadius: "10px",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontWeight: "bold",
            color: "#7D1538",
            textAlign: "center",
            p: 1,
          }}
        >
          Total Purchases (€)
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={purchasesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Date"
              label={{ value: "", position: "insideBottomRight" }}
            />
            <YAxis tickFormatter={(value) => `€${value}`} />
            <Tooltip formatter={(value) => dataFormatter(value)} />
            <Legend />

            <Line
              type="monotone"
              dataKey="Amount"
              stroke="#7D1538"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Charts;
