import {
  fetchFail,
  fetchStart,
  getStockSuccess,
  getStockDataSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"


const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  //?Global
  const getStock = async (path = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data;
      
      dispatch(getStockSuccess({ stockData, path }));
    } catch (error) {
      toastErrorNotify(`${path}`)
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const deleteStock = async (path = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosToken.delete(`/${path}/${id}`);
      toastSuccessNotify(`${path}`)
      getStock(path);
    } catch (error) {
      toastErrorNotify(`${path}`)
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const postStock = async (path = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`/${path}/`, info);
      toastSuccessNotify(`${path}`)
      getStock(path);
    } catch (error) {
      toastErrorNotify(`${path}`)
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const putStock = async (path = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosToken.put(`/${path}/${info._id}`, info);
      toastSuccessNotify(`${path}`)
      getStock(path);
    } catch (error) {
      toastErrorNotify(`${path}`)
      dispatch(fetchFail());
      console.log(error);
    }
  };

  //? beispiel Promise.All 
  const getStockData = async () => {
    try {
      const [pro, pur, bra, fir] = await Promise.all([
        axiosToken("/products"),
        axiosToken("/purchases"),
        axiosToken("/brands"),
        axiosToken("/firms"),
        
      ]);

      const products = pro?.data?.data;
      const purchases = pur?.data?.data;
      const brands = bra?.data?.data;
      const firms = fir?.data?.data;
      

      dispatch(
        getStockDataSuccess({
          products,
          purchases,
          brands,
          firms,
          
        })
      );
    } catch (error) {
      
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getStock, deleteStock, postStock, putStock, getStockData };
};

export default useStockRequest;
