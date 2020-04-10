import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../components/auth/authSlice';
import counterReducer from '../components/counter/counterSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer
  },
});
