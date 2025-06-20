import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from '../../api.js';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (params, thunkAPI) => {
    try {
      const data = await getCars(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
