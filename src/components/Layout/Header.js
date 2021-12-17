import React, { useRef } from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forecastActions } from '../../store/forecast';

const Header = (props) => {
  const cityRef = useRef();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(forecastActions.closeModal());
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.getSearch(cityRef.current.value);
  };
  return (
    <div>
      <header className={classes.header}>
        <Link to='/' onClick={clickHandler}>
          Forecast
        </Link>
        <form onSubmit={submitHandler}>
          <label htmlFor='city-search'>City: </label>
          <input id='city-search' ref={cityRef}></input>
          <button>Search</button>
        </form>
      </header>
    </div>
  );
};

export default Header;
