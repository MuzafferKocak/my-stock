import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

const Firms = () => {
  const { getFirms,getSales } = useStockRequest();

  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getFirms();
    getSales()
  }, []);
  console.log(firms);

  return <div>Firms</div>;
};

export default Firms;
