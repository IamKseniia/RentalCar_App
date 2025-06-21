import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations.js';

const initialState = {
  items: [],
  page: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    resetCars(state) {
      state.items = [];
      state.page = 1;
      state.totalPages = 1;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const requestedPage = action.meta.arg.page;

        const newCars = action.payload.cars;

        const existingIds = new Set(state.items.map(car => car.id));

        const filteredNew = newCars.filter(car => !existingIds.has(car.id));

        state.items.push(...filteredNew);
        state.page = requestedPage;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
