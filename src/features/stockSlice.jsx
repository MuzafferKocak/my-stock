import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: [],
  sales: [],
  firms: [],
  products: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getFirmsSuccess: (state, { payload }) => {
      state.loading = false;
      state.firms = payload;
    },
    getSalesSuccess: (state, { payload }) => {
      state.loading = false;
      state.sales = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, getFirmsSuccess, getSalesSuccess } =
  stockSlice.actions;

export default stockSlice.reducer;
