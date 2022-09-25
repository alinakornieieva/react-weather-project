import React from "react";

export default function CurrentTime(props) {
    let day = props.value.getDay()
    return(
        <div>{day} 11:45</div>
    )
    
        
}