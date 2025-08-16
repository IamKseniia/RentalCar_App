import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  minMileage: '',
  maxMileage: '',
  favoritesOnly: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action.payload };
    },
    toggleFavoritesOnly(state) {
      state.favoritesOnly = !state.favoritesOnly;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilters, toggleFavoritesOnly, resetFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
