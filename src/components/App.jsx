import { useState, useEffect } from "react";
import getWeather from "API/API.js";
import natureBg from '..//backgroundImages/nature.jpg'
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import HeaderSearchBar from "./HeaderSearchBar/HeaderSearchBar";



export const App = () => {

  const [data, setData] = useState(null)

  const [searchCity, setSearchCity] = useState('')


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getWeather(searchCity)
        setData(data)
        // console.log(data)
        // console.log(data.name)
        // console.log(data.weather[0].description)
        // console.log(data.sys.country)
        // console.log(data.main.temp)
        // console.log(Math.round(data.main.temp_min))
        // console.log(data.main.pressure)
        // console.log(data.wind.speed)
      } catch (e) {
        console.log(e)
      }
    };
    if (searchCity) {
      getData()
    }
  }, [searchCity]);

  return (
    <>
      <HeaderSearchBar onSubmitHandler={setSearchCity} />
      <main className="app" style={{ backgroundImage: `url(${natureBg})` }}>
        <section className="overlay">
          {data && (
            <div className="container">
              <div className="section section__input">
              </div>
              <div className=" section section__temperature">
                <div className="icon">
                  <h3>{data.name} ,{data.country}</h3>

                  <img src={data.iconURL} alt="icon" />
                  <h3>{data.description}</h3>
                </div>
                <div className="temperature">
                  <h1>{`${(Math.round(data.temp) / 10)} ℃`}</h1>
                </div>
              </div>
              <WeatherInfo data={data} />
            </div>
          )}
        </section>
      </main>
    </>
  );
};



