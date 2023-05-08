import { useState } from 'react'
import axios from 'axios'

const WeatherDisplay = ({ country }) => {

    const [temperature, setTemperature] = useState(0)
    const [windSpeed, setWindSpeed] = useState(0)
    const [picId, setPicId] = useState('')

    console.log(country.latlng);
    const [lat, lng] = country.latlng
    console.log(lat,lng);
    const api_key = process.env.REACT_APP_API_KEY
    console.log(api_key);
    const Url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`    

    axios
      .get(Url)
      .then(response => { console.log(response.data)
        setTemperature(Math.round(response.data.main.temp - 273.15))
        console.log(temperature);
        setWindSpeed(response.data.wind.speed)
        console.log(windSpeed);
        setPicId(response.data.weather[0].icon)
      })
      .catch(err => console.log(err))

    return (
        <div>
            <h1>Weather in {country.name.common}</h1>
            <h3>temperature {temperature} Celsius</h3>
            <div>
                <img src={`https://openweathermap.org/img/wn/${picId}@2x.png`} 
                     alt={"a cloud or smthn"} />
            </div>
            <h3>wind {windSpeed} m/s</h3>
        </div>
    )

}

export default WeatherDisplay