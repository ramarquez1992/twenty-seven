import {createSlice} from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',

  initialState: {
    isLoading: false
  },

  reducers: {
    toggle: state => {
      state.isLoading = !state.isLoading;
    },
  }
});

export const {toggle} = loadingSlice.actions;
export const selectIsLoading = state => state.loading.isLoading;

export default loadingSlice.reducer;
