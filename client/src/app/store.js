import {configureStore} from '@reduxjs/toolkit';
import loadingReducer from '../components/loading/loadingSlice';
import authReducer from '../components/auth/authSlice';
import counterReducer from '../components/counter/counterSlice';

export default configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
    counter: counterReducer
  },
});
