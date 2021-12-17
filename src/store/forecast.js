import { createSlice } from '@reduxjs/toolkit';

const initialForecastState = {
  forecastDaily: [],
  forecastDate: [],
  forecastHourly: [],
  searchCity: '',
  lat: '',
  lon: '',
  showModal: false,
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState: initialForecastState,
  reducers: {
    setupHourlyForecast(state, action) {},
    setupLatLon(state, action) {
      state.forecastDaily = action.payload.forecastDaily;
      state.searchCity = action.payload.searchCity;
      state.forecastDate = action.payload.forecastDate;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
    increase(state, action) {
      state.forecast = state.forecast + action.payload;
    },
    showModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
  },
});

export const forecastActions = forecastSlice.actions;

export default forecastSlice.reducer;
