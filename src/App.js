import Header from './components/Layout/Header';
import { useDispatch } from 'react-redux';
import { forecastActions } from './store/forecast';
import { fetchDailyForecast } from './store/forecast-actions';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import HourlyForecastPage from './pages/HourlyForecastPage';

function App() {
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    dispatch(fetchDailyForecast(event));
    dispatch(forecastActions.showModal());
  };

  return (
    <>
      <Header getSearch={clickHandler} />
      <Switch>
      <Route path='/hourly-forecast/:city/:timeStamp' exact>
        <HourlyForecastPage />
      </Route>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
      </Switch>
    </>
  );
}

export default App;
