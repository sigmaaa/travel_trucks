import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      console.log(filters);
      const { data } = await axios.get("/campers", {
        params: { page, limit, ...filters },
      });

      return {
        total: parseInt(data.total),
        items: data.items,
        page: page,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
