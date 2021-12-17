import React from 'react';
import Forecast from '../components/Forecast/Forecast';
import Modal from '../components/UI/Modal';
import XIcon from '../components/UI/XIcon';
import ForecastDaily from '../components/Forecast/ForecastDaily';
import { useSelector, useDispatch } from 'react-redux';
import { forecastActions } from '../store/forecast';
import { fetchDailyForecast } from '../store/forecast-actions';

const DUMMY_DATA = [
  'London',
  'New York',
  'Tel Aviv',
  'Rome',
  'Paris',
  'Hong Kong',
  'Bangkok',
  'Dubai',
  'Singapore',
  'Delhi',
];

const MainPage = () => {
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.forecast.showModal);

  const clickHandler = (event) => {
    dispatch(fetchDailyForecast(event));
    dispatch(forecastActions.showModal());
  };

  const closeModalHandler = () => {
    dispatch(forecastActions.closeModal());
  };

  return (
    <>
      {isModal && (
        <Modal onClick={closeModalHandler}>
          <XIcon onClick={closeModalHandler} />
          <ForecastDaily />
        </Modal>
      )}
      <Forecast forecastData={DUMMY_DATA} getSearch={clickHandler} />
    </>
  );
};

export default MainPage;
