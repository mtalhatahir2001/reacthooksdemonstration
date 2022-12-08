import React, { useRef } from 'react';
import "./counter.css";
import { useState,useEffect,useReducer} from 'react';
import Error from './../error/error';
import {reducer, defaultState} from "./../../redux/reducer";



export default function Counter(){
    let [counterValue, incrementCounter] = useState(0);       
    let ref = useRef(null);
    let [state, dispatch] = useReducer(reducer, defaultState);

    function incrementFunction(e){
        if(counterValue < 3)
            incrementCounter(counterValue + 1);
    }
    function changeColor(e){
        if(ref.current.classList.length == 1)
            ref.current.classList.add("lightBlue");
        else
            ref.current.classList.remove("lightBlue");
    }

    useEffect(()=>{
        if(counterValue == 3){
            dispatch({type:"limit"});
        }
        if(counterValue == 0){
            dispatch({type:"reset"});
        }
    },[counterValue]);

    return <>
        {state.isErrorDisplayed && <Error discription={state.errorDiscription}/>}
        <center>
        <div className="counterComp" ref={ref}>
            <h1>{counterValue}</h1>
            <button onClick={incrementFunction}>Increment</button>

            {state.isErrorDisplayed && <button onClick={()=>incrementCounter(0)}>Reset</button>}
            
            <button onClick={changeColor}>Change color</button>
        </div>
        <p>The limit to the above counter is 3 try reaching it.</p>
        </center>
    </>
}