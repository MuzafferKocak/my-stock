import axios from "axios";
import{toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"

export const login = async (userData) => {
  // const BASE_URL = "https://19229.fullstack.clarusway.com";

  try {
    const data = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, userData);
    toastSuccessNotify("")
    console.log(data);
  } catch (error) {
    toastErrorNotify("")
    console.log(error);
    
  }

  
};
