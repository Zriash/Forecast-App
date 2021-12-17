import React from 'react';
import classes from './ForecastDaily.module.css';
import { useSelector } from 'react-redux';
import ForecastItem from './ForecastItem';

const ForecastDaily = () => {
  const forecastDaily = useSelector((state) => state.forecast.forecastDaily);
  const forecastDate = useSelector((state) => state.forecast.forecastDate);
  const city = useSelector((state) => state.forecast.searchCity);

  return (
    <>
      <h1>Forecast for {city}</h1>
      <div className={classes.container}>
        <ForecastItem dailyData={forecastDaily[0]} dailyDate={forecastDate[0]} city={city} />
        <ForecastItem dailyData={forecastDaily[1]} dailyDate={forecastDate[1]} city={city} />
        <ForecastItem dailyData={forecastDaily[2]} dailyDate={forecastDate[2]} city={city} />
        <ForecastItem dailyData={forecastDaily[3]} dailyDate={forecastDate[3]} city={city} />
      </div>
    </>
  );
};

export default ForecastDaily;
