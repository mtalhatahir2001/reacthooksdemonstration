import React from 'react';
import "./counter.css";
import { useState,useEffect,useReducer} from 'react';
import Error from './../error/error';
import {reducer, defaultState} from "./../../redux/reducer";



export default function Counter(){
    let [counterValue, incrementCounter] = useState(0);
    let [state, dispatch] = useReducer(reducer, defaultState);

    function handleClick(e){
        if(counterValue < 10)
            incrementCounter(counterValue + 1);
    }

    useEffect(()=>{
        if(counterValue == 10){
            dispatch({type:"limit"});
        }
        if(counterValue == 0){
            dispatch({type:"reset"});
        }
    },[counterValue]);

    return <>
        {state.isErrorDisplayed && <Error discription={state.errorDiscription}/>}
        <center>
        <div className="counterComp">
            <h1>{counterValue}</h1>
            <button onClick={handleClick}>Increment</button>
            {state.isErrorDisplayed && <button onClick={()=>incrementCounter(0)}>Reset</button>}
        </div>
        </center>
    </>
}