import { createSlice } from '@reduxjs/toolkit';

async function serverLogin(token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({token: token})
  };

  const response = await fetch(`/login`, requestOptions);
  return response.json();
}

function getStoredUser() {
  let stored = localStorage.getItem('user');
  return stored ? JSON.parse(stored) : null;
}

function getStoredToken() {
  let stored = localStorage.getItem('token');
  return stored ? JSON.parse(stored) : null;
}

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: getStoredUser(),
    token: getStoredToken(),
    loggedIn: getStoredUser() && getStoredToken()
  },

  reducers: {
    login: (state, action) => {
      const token = action.payload.token;

      serverLogin(token.id_token)
          .then(user => {
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('user', JSON.stringify(user));
            window.location.reload(false);
          });
    },

    logout: (state, action) => {
      localStorage.clear();
      window.location.reload(false);
    }
  }
});

export const { login, logout } = authSlice.actions;

export const selectCurrentUser = state => state.auth.user;
export const selectLoggedIn = state => state.auth.loggedIn;

export default authSlice.reducer;
