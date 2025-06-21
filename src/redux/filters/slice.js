import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  minMileage: '',
  maxMileage: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
