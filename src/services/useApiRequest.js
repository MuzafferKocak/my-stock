import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";

//? Custom Hook
const useApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosToken, axiosPublic } = useAxios();

  const login = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login/", userData);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Anmeldung Erfolgreich");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Anmeldung nicht Erfolgreich");
      console.log(error);
    }
  };
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users/", userInfo);
      dispatch(registerSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    toastSuccessNotify("Abmeldung Erfolgreich");
    try {
      await axiosToken.get("/auth/logout");
      dispatch(logoutSuccess());

    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Abmeldung nicht Erfolgreich");
    }
  };
  return { login, register, logout };
};

export default useApiRequest;
