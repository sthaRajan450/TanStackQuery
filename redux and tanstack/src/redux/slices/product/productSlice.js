import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  let response = await fetch("https://dummyjson.com/products");
  response = await response.json();
  return response.products;
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("Error:", action.payload);
    });
  },
});

export default productSlice.reducer;
