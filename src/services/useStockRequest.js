
import useAxios from "./useAxios";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  

  const getFirms = async () => {
    try {
      const {data} = await axiosToken("/firms");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return { getFirms };
};

export default useStockRequest;
