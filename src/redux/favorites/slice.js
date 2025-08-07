import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromStorage = () => {
  try {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
};

const initialState = {
  items: loadFavoritesFromStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      const index = state.items.indexOf(carId);
      if (index === -1) {
        state.items.push(carId);
      } else {
        state.items.splice(index, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const selectFavorites = state => state.favorites.items;
