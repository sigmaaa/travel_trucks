import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter((favId) => favId !== id);
      } else {
        state.ids.push(id);
      }
    },
  },
});

export const {
  toggleFavorite,
} = favoriteSlice.actions;

export const selectFavoriteIds = (state) => state.favorites.ids;

export default favoriteSlice.reducer;
