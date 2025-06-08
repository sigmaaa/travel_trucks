import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    transmission: "",
    form: "",
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
  },
  reducers: {
    changeFilter(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectFilters = (state) => state.filters;
export default filtersSlice.reducer;
