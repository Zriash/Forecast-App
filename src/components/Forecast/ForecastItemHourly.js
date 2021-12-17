import React from 'react';
import classes from './ForecastItem.module.css';
import Card from '../UI/Card';

const ForecastItem = (props) => {
  return (
    <Card>
      <ul className={classes.list}>
        <li>for hours: ...</li>
        <li>
          maximum tempeture:
          {props.dailyData ? props.dailyData.temp.max + ' ºC' : 'loading'}
        </li>
        <li>
          minimum tempeture:
          {props.dailyData ? props.dailyData.temp.min + ' ºC' : 'loading'}
        </li>
        <li>
          humidity:
          {props.dailyData ? props.dailyData.humidity + '%' : 'loading'}
        </li>
      </ul>
    </Card>
  );
};

export default ForecastItem;
