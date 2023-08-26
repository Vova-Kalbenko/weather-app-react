import React from 'react'
// import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md'
const WeatherInfo = ({ data }) => {


  const cards = [
    
    {
      id: 1,
      icon: <FaArrowDown />,
      title: 'min',
      data: ((data.temp_min.toFixed()/10))
    },

    {
      id: 2,
      icon: <FaArrowUp />,
      title: 'max',
      data: ((Math.round(data.temp_max))/10),
    },

    {
      id: 3,
      icon: <BiHappy />,
      title: 'feels like',
      data: ((Math.round(data.temp_min))/10),
    },

    {
      id: 4,
      icon: <MdCompress />,
      title: 'pressure',
      data: (Math.round(data.pressure /10) + ` mm`),
    },

    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: 'humidity',
      data: (data.humidity + ` %`),
    },
    {
      id: 6,
      icon: <FaWind />,
      title: 'wind speed',
      data: (data.speed + ` m/s`),
    }
  ]
  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data }) => (

        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{data}</h2>
        </div>

      ))}


    </div>
  )
}

export default WeatherInfo