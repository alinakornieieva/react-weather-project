import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";




export default function Forecast() {

    let [data, setData] = useState({})
    let [ready, setReady] = useState(false);
    function submitResult(response) {
        console.log(response)
        setReady(true)
        setData({
            temp: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed
        })
    }

    if (ready) {
        return(
            <div>
                <form>
                    <input type="text" placeholder="Enter a city..."></input>
                    <input type="submit" value="Submit"></input> 
        
                </form>
                <h1 className="mt-3">London</h1>
                <ul>
                    <Time date={data.date}/>
                    <li className="description">{data.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6"><span className="temp">{data.temp}</span>
                    <span className="degrees">
                    <span><a href="/" className="celsius">°C</a></span>|<span><a href="/" className="fahrenheit">°F</a></span>
                    </span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: <span>{data.humidity}</span>%</li>
                            <li>Wind: <span>{data.wind}</span>km/h</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="day-1">
                        <h2>Sat</h2>
                        <span><span>10</span>|<span>12</span> </span>
                    </div>
                    <div className="day-2">
                        <h2>Sun</h2>
                        <span><span>10</span>|<span>12</span> </span>
                    </div>
                    <div className="day-3">
                        <h2>Mon</h2>
                        <span><span>10</span>|<span>12</span> </span>
                    </div>
                    <div className="day-4">
                        <h2>Tue</h2>
                        <span><span>10</span>|<span>12</span> </span>
                    </div>
                    <div className="day-5">
                        <h2>Wed</h2>
                        <span><span>10</span>|<span>12</span> </span>
                    </div>
    
                </div> */}
            </div>
        )
    } else{
        let city = "London"
        let apiKey = '0c4ad9b60233c41a45662c2acb7b1ef5';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(submitResult);
        return "Loading...";
    }
   
}