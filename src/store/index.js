import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './forecast';

const store = configureStore({
  reducer: { forecast: forecastReducer },
});

export default store;
