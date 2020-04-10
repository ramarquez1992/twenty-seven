import {createSlice} from '@reduxjs/toolkit';

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
      const user = action.payload.user;

      state.token = token;
      state.user = user;

      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));
      window.location.reload(false);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loggedIn = false;
      localStorage.clear();
      window.location.reload(false);
    }
  }
});

export const login = payload => async dispatch => {
  const token = payload.token;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({token: token.id_token})
  };

  const response = await fetch(`/login`, requestOptions);
  const user = await response.json();
  dispatch(authSlice.actions.login({token: token, user: user}));
};

export const {logout} = authSlice.actions;

export const selectCurrentUser = state => state.auth.user;
export const selectLoggedIn = state => state.auth.loggedIn;

export default authSlice.reducer;
