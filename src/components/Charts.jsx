

import * as React from "react";
import { useSelector } from "react-redux";
import { Grid2 } from "@mui/material"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart } from "recharts";


const dataFormatter = (number) => `$${Intl.NumberFormat("us").format(number)}`;

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  console.log(sales);
  console.log(purchases);

  
  const salesData =
    sales?.map((item) => ({
      x: new Date(item.createdAt).toLocaleDateString("de-DE"),
      y: item.amount,
    })) || [];
  console.log(salesData);

  const purchasesData =
    purchases?.map((item) => ({
      x: new Date(item.createdAt).toLocaleDateString("de-DE"),
      y: item.amount,
    })) || [];
console.log(purchasesData);
    

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      {/* Sales için grafik */}
      <ResponsiveContainer width="48%" height={400}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" label={{ value: 'Date', position: 'insideBottomRight' }} />
          <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value) => dataFormatter(value)} />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      {/* Purchases için grafik */}
      <ResponsiveContainer width="48%" height={400}>
        <LineChart data={purchasesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" label={{ value: 'Date', position: 'insideBottomRight' }} />
          <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value) => dataFormatter(value)} />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    
    // <>
      
    //   <LineChart
    //     width={600}
    //     height={400}
    //     // data={salesData}
    //     series={[
    //       {
    //         data: salesData,
    //         dataKey: "y",
    //         label: "Sales Amount",
    //         area: true,
    //         showMark: false,
    //         color: "indigo",
    //       },
    //     ]}
    //     xAxis={{ dataKey: "x", label: "Date", scaleType: "band" }}
    //     yAxis={{
    //       label: "Amount",
    //       valueFormatter: dataFormatter,
    //       width: 60,
    //     }}
    //     // sx={{
    //     //   [`& .${lineElementClasses.root}`]: {
    //     //     fillOpacity: 0.1, 
    //     //   },
    //     // }}
    //   />

      
    //   {/* <LineChart
    //     width={600}
    //     height={400}
    //     // data={purchasesData}
    //     series={[
    //       {
    //         data: purchasesData,
    //         dataKey: "y",
    //         label: "Purchases Amount",
    //         area: true,
    //         showMark: false,
    //         color: "red",
    //       },
    //     ]}
    //     xAxis={[{ dataKey: "x", label: "Date", scaleType: "band" }]}
    //     yAxis={{
    //       label: "Amount",
    //       valueFormatter: dataFormatter,
    //       width: 60,
    //     }}
    //     // sx={{
    //     //   [`& .${lineElementClasses.root}`]: {
    //     //     fillOpacity: 0.1, 
    //     //   },
    //     // }}
    //   /> */}
    // </>
  );
};

export default Charts;








