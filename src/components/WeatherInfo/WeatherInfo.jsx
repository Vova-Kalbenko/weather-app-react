import React from 'react'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
const WeatherInfo = ({ weatherData }) => {


  const cards = [
    
    {
      id: 1,
      icon: <FaArrowDown />,
      title: 'min',
      data: ((weatherData.main.temp_min.toFixed()/10))
    },

    {
      id: 2,
      icon: <FaArrowUp />,
      title: 'max',
      data: ((Math.round(weatherData.main.temp_max))/10),
    },

    {
      id: 3,
      icon: <BiHappy />,
      title: 'feels like',
      data: ((Math.round(weatherData.main.temp_min))/10),
    },

    {
      id: 4,
      icon: <MdCompress />,
      title: 'pressure',
      data: (Math.round(weatherData.main.pressure /10) + ` mm`),
    },

    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: 'humidity',
      data: (weatherData.main.humidity + ` %`),
    },
    {
      id: 6,
      icon: <FaWind />,
      title: 'wind speed',
      data: (weatherData.wind.speed + ` m/s`),
    }
  ]
  return (
    <ul className="section section__descriptions">
      {cards.map(({ id, icon, title, data }) => (

        <li key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{data}</h2>
        </li>

      ))}


    </ul>
  )
}

export default WeatherInfo