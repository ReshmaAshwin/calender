import React from "react";
import '../style.css';

function Day({day, onClick} : any) {
    const className=`day ${day.value==='padding'?'padding':''}
     ${day.isCurrentDay? 'currentDay':''}`;
    return (
        <div onClick = {onClick} className = {className} >
           {day.value === 'padding' ? '' : day.value}
           {day.event && <div className = "event"> {day.event.title} </div>}
       </div> 
    )
}
export{Day};