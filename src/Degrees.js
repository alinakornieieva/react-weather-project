import React from "react";

export default function Degree(props) {
    return(
        <div>
             <span className="temp">{props.value}</span>
             <span className="degrees">
                        <span><a href="/" className="celsius">°C</a></span>|<span><a href="/" className="fahrenheit">°F</a></span>
                        </span>
        </div>
    )
}