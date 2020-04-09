import { createSlice } from '@reduxjs/toolkit';

async function serverLogin(user) {
  const response = await fetch('/api/login', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(user) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function serverLogout(user) {
  const response = await fetch('/api/logout', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(user) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

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
    login: (state, action) => {
      const u = action.payload;
      state.currentUser = u;

      serverLogin(u)
          .then(res => {
            localStorage.setItem('user', JSON.stringify(u));
          });
    },

    logout: (state, action) => {
      const u = state.currentUser;
      state.currentUser = null;

      serverLogout(u)
          .then(res => {
            localStorage.removeItem('user');
            window.location.reload(false);
          });
    }
  }
});

export const { login, logout } = authSlice.actions;

export const selectCurrentUser = state => state.auth.currentUser;

export default authSlice.reducer;
