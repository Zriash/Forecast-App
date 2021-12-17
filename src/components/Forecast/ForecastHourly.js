import React from 'react';
import ForecastItemHourly from './ForecastItemHourly';
import classes from './ForecastHourly.module.css';
import { useParams } from 'react-router-dom';

const ForecastHourly = () => {
  const { city, timeStamp } = useParams();

  const date = new Date(timeStamp * 1000).toString();

  return (
    <>
      <h1>Forecast for {city} </h1>
      <h2> Date: {date}</h2>
      <div className={classes.container}>
        <ForecastItemHourly />
        <ForecastItemHourly />
        <ForecastItemHourly />
        <ForecastItemHourly />
      </div>
    </>
  );
};

export default ForecastHourly;
