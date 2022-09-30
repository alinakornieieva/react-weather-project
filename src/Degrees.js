import React, { useState } from "react";


export default function Degree(props) {
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    const [unit, setUnit] = useState("celsius")
    if (unit === "celsius") {
        return(
           <div className="temp-degree">
            <span className="temp">{props.value}</span>
            <span className="conversion">
                <span href="/">°C </span>|<a href="/" onClick={showFahrenheit}>°F</a>
            </span>
           </div>
     )
    } else{
        let fahrenheit = Math.round((props.value * 9/5) + 32);
        return(
            <div className="temp-degree">
            <span className="temp">{fahrenheit}</span>
            <span className="conversion">
                <a href="/" onClick={showCelsius}>°C </a>|<span>°F</span>
                </span>
           </div>  
        )
    }
       
}