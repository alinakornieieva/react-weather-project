import React from "react";
import Time from "./Time";
import  WeatherIcon from "./WeatherIcon"
import Degrees from "./Degrees";


export default function WeatherInfo(props) {
    return(
        <div>
            <h1 className="mt-3">{props.info.city}</h1>
                <ul>
                    <li>
                    <Time date={props.info.date}/>
                    </li>
                    <li className="description">{props.info.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <span>
                            <WeatherIcon code={props.info.icon} />
                            <Degrees value={props.info.temp} />
                        </span>
                        
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: <span>{props.info.humidity}</span>%</li>
                            <li>Wind: <span>{props.info.wind}</span>km/h</li>
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
}


