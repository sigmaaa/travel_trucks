import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./campersOps";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    selectedCamper: null,
    total: 0,
    currentPage: 0,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { page, items: newItems } = action.payload;
        state.items = page === 1 ? newItems : [...state.items, ...newItems];

        state.total = action.payload.total;
        state.currentPage = action.payload.page;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
        state.selectedCamper = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.selectedCamper;
export const selectTotalCampers = (state) => state.campers.total;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;

export default campersSlice.reducer;
