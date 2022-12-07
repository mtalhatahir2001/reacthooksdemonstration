import React from 'react'
import "./counter.css"
import { useState,useEffect } from 'react'

export default function Counter(){
    let [counterValue, incrementCounter] = useState(0);

    function handleClick(e){
        incrementCounter(counterValue + 1);
    }

    useEffect(()=>{
        if(counterValue == 10){
            console.log("Use effect triggered");
        }
    },[counterValue]);

    return <>
        <div className="counterComp">
            <h1>{counterValue}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    </>
}