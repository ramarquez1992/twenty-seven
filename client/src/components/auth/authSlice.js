import { createSlice } from '@reduxjs/toolkit';

async function login(user) {
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

async function logout(user) {
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
    setCurrentUser: (state, action) => {
      const cu = state.currentUser;
      if (action.payload == null && cu) {
        state.currentUser = null;

        logout(cu)
            .then(res => {
              localStorage.removeItem('user');
              window.location.reload(false);
            });
      } else {
        localStorage.setItem('user', JSON.stringify(action.payload));
        state.currentUser = action.payload;
        login(action.payload);
      }
    }
  }
});

export const { setCurrentUser } = authSlice.actions;

export const selectCurrentUser = state => state.auth.currentUser;

export default authSlice.reducer;
