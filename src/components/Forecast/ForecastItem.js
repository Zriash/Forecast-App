import React from 'react';
import classes from './ForecastItem.module.css';
import Card from '../UI/Card';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ForecastItem = (props) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/hourly-forecast/${props.city}/${props.dailyDate}`);
  };

  return (
    <Card>
      <ul className={classes.list}>
        <li>
          date:
          {props.dailyDate
            ? new Date(props.dailyDate * 1000).toString()
            : 'loading'}
        </li>
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
      <button className={classes.button} onClick={clickHandler}>
        View hourly forecast
      </button>
    </Card>
  );
};

export default ForecastItem;
