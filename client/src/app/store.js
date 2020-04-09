import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/auth/authSlice';
import homeReducer from '../components/home/homeSlice';
import counterReducer from '../components/counter/counterSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    counter: counterReducer
  },
});
