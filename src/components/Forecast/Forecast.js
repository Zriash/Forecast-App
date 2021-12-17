import React from 'react';
import classes from './Forecast.module.css';
import Card from '../UI/Card';

const Forecast = (props) => {

  const getCitySearch = (event) => {
    props.getSearch(event.target.innerText);
  };

  const favCity = props.forecastData.map((loopCity) => (
    <Card key={loopCity} onClick={getCitySearch} className={classes.card}>
      {loopCity}
    </Card>
  ));
  return (
    <div className={classes.container}>
      {favCity}
    </div>
  );
};

export default Forecast;
