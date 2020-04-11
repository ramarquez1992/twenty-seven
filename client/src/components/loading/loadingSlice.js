import {createSlice} from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',

  initialState: {
    loadingCount: 0,
    isLoading: false
  },

  reducers: {
    increment: state => {
      ++state.loadingCount;
    },

    decrement: state => {
      --state.loadingCount;
    }
  }
});

export const {increment, decrement} = loadingSlice.actions;
export const selectIsLoading = state => state.loading.loadingCount > 0;

export default loadingSlice.reducer;
