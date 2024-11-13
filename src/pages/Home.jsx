import React, { useEffect } from "react";
import KPICards from "../components/home/KPICards";
import Charts from "../components/home/Charts";
import useStockRequest from "../services/useStockRequest";


const Home = () => {
  const {getStock} = useStockRequest();
  useEffect(() => {
    getStock("sales")
    getStock("purchases")
  }, []); // eslint-disable-line

  return (
    <div>
      <KPICards />
      <Charts />
    </div>
  );
};

export default Home;
