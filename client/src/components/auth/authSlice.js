import { createSlice } from '@reduxjs/toolkit';


function getStoredUser() {
  let stored = localStorage.getItem('user');

  return stored ? JSON.parse(stored) : null;
}

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    currentUser: getStoredUser()
  },

  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;

      if (action.payload == null) {
        localStorage.removeItem('user');
        window.location.reload(false);
      } else {
        localStorage.setItem('user', JSON.stringify(action.payload));
      }
    }
  }
});

export const { setCurrentUser } = authSlice.actions;

export const selectCurrentUser = state => state.auth.currentUser;

export default authSlice.reducer;
