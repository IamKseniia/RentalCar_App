import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/slice.js';
import { filtersReducer } from './filters/slice';
import { favoritesReducer } from './favorites/slice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
