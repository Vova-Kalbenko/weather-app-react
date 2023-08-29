




export default async function getWeather(searchCity) {
  const APIKEY = '64457f7911599961283006a731b65547'
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units="metric"&appid=${APIKEY}`;
  // console.log(searchCity)



    const data = await fetch(URL).then(response=>response.json()).then(data=>data).catch(error => console.error('Ошибка запроса:', error));

    
// const {weather, 
//   main: {feels_like, humidity, pressure, temp, temp_max, temp_min}, 
//   wind: {speed}, 
//   sys: {country}, 
//   name, cod} = data
// const {description, icon} = weather[0] 
return data
// {
//   description,
//   iconURL: makeIconURL(icon), 
//   temp, 
//   feels_like, 
//   temp_min, 
//   temp_max, 
//   pressure, 
//   humidity, 
//   speed, 
//   country,  
//   name ,
//   cod
// }

}



