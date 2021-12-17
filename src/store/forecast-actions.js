import { forecastActions } from './forecast';

const openWeatherKey = process.env.REACT_APP_OW_KEY;

export const fetchDailyForecast = (city) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${openWeatherKey}`
      );
      if (!response.ok) {
        throw new Error('Could not fetch lat, lan data!');
      }

      const responseData = await response.json();
      const lat = responseData[0].lat;
      const lon = responseData[0].lon;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${openWeatherKey}&units=metric`
      );

      if (!res.ok) {
        throw new Error('Could not fetch forecast data!');
      }

      const resData = await res.json();
      const forecastDaily = resData.daily;
      const dateArry = resData.daily.map((day) => day.dt);

      return { forecastDaily, lat, lon, city, dateArry };
    };

    try {
      const { lat, lon, city, forecastDaily, dateArry } = await fetchData();
      dispatch(
        forecastActions.setupLatLon({
          forecastDaily: forecastDaily || [],
          forecastDate: dateArry || [],
          searchCity: city,
          lat,
          lon,
        })
      );
    } catch (error) {
      console.log(error);
      return;
    }
  };
};

export const fetchHourlyForecast = (city) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${openWeatherKey}`
      );
      if (!response.ok) {
        throw new Error('Could not fetch lat, lan data!');
      }

      const responseData = await response.json();
      const lat = responseData[0].lat;
      const lon = responseData[0].lon;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${openWeatherKey}&units=metric`
      );

      if (!res.ok) {
        throw new Error('Could not fetch forecast data!');
      }

      const resData = await res.json();
      const forecastDaily = resData.daily;
      const dateArry = resData.daily.map((day) => day.dt);

      return { forecastDaily, lat, lon, city, dateArry };
    };

    try {
      const { lat, lon, city, forecastDaily, dateArry } = await fetchData();
      dispatch(
        forecastActions.setupHourlyForecast({
          forecastDaily: forecastDaily || [],
          forecastDate: dateArry || [],
          searchCity: city,
          lat,
          lon,
        })
      );
    } catch (error) {
      console.log(error);
      return;
    }
  };
};
