
import { fetchFail, fetchStart, getFirmsSuccess, getSalesSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch =useDispatch()
  

  const getFirms = async () => {
    dispatch(fetchStart())
    try {
      const {data} = await axiosToken("/firms");
      
      dispatch(getFirmsSuccess(data.data))
    } catch (error) {
      dispatch(fetchFail())
      console.log(error);
    }
  };
  const getSales = async () => {
    dispatch(fetchStart())
    try {
      const {data} = await axiosToken("/sales");
      
      dispatch(getSalesSuccess(data.data))
    } catch (error) {
      dispatch(fetchFail())
      console.log(error);
    }
  };
  return { getFirms,getSales };
};

export default useStockRequest;
