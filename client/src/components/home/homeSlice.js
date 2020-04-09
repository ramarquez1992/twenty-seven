import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'main',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { incrementByAmount } = homeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.main.value;

export default homeSlice.reducer;
