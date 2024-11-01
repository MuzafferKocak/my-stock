import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//? Custom Hook
const useApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (userData) => {
    // const BASE_URL = "https://19229.fullstack.clarusway.com";

    dispatch(fetchStart());
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("");
      console.log(error);
    }
  };
  const register = async () => {};
  const logout = async () => {};
  return { login, register, logout };
};

export default useApiRequest;
