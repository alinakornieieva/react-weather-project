import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Forecast(props) {
    let [city, setCity] = useState(props.defaultCity);
    let [data, setData] = useState({ready: false})
   
    function submitResult(response) {
        console.log(response)
        setData({
            ready: true,
            city: response.data.name,
            temp: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed
        })
    }
    function search() {
        let apiKey = '0c4ad9b60233c41a45662c2acb7b1ef5';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(submitResult);

    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function changeCity(event) {
       setCity(event.target.value);
    }
   

    if (data.ready) {
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="search" className="m-2 search" onChange={changeCity} placeholder="Enter a city..."></input>
                    <input type="submit" value="Submit" className="btn btn-info mb-1"></input> 
                </form>
                <WeatherInfo info={data}/>
            </div>
        )
    } else{
        search();
        return "Loading...";
    }
   
}