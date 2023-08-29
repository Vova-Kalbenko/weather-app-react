import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";
import css from './HeaderSearchBar/HeaderSearchBar.module.css'
import natureBg from '..//backgroundImages/nature.jpg'
import getWeather from "API/API.js";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const [error, setError] = useState(false);


  const getWeatherData = async () => {
    try {
      const data = await getWeather(city)
      setWeatherData(data)

      // console.log(data)
      console.log(data.weather[0].icon)
      setError(false);
    } catch (error) {
      setError(true);
      setWeatherData(null);
    }
  };



  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherData();
  };

  return (
    <>
      <header
        className={css.searchbar}>
        <form
          className={css.searchForm}
          onSubmit={handleSubmit}
        >
          <button type="submit"
            className={css.searchbutton}
          >
            <span className="searchForm-button-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
              >
                <title>search</title>
                <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
              </svg>
            </span>
          </button>

          <input
            className={css.searchinput}
            type="text"
            name='city'
            onChange={handleCityChange}
            autoComplete="off"
            value={city}
            autoFocus
            placeholder="Search City"
          />
        </form>
      </header>

      <main className="app" style={{ backgroundImage: `url(${natureBg})` }}>
        <section className="overlay">
        {error && (
        <div>
          <h2 className="error">Please, enter the correct city name</h2>
        </div>
      )}
          {weatherData && (
            <div className="container">
              <div className="section section__input">
              </div>
              <div className=" section section__temperature">
                <div className="icon">
                  <h3>{weatherData.name} ,{weatherData.sys.country}</h3>

                  <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="icon" />
                  <h3>{weatherData.weather[0].description}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${(Math.round(weatherData.main.temp) / 10)} ℃`}</h1>
                </div>
              </div>
              <WeatherInfo weatherData={weatherData} />
            </div>
          )}
        </section>
      </main>


    </>
  );
};

export default App;