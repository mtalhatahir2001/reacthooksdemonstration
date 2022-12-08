import React, { useMemo, useRef } from 'react';
import "./counter.css";
import { useState,useEffect,useReducer, useCallback} from 'react';
import Error from './../error/error';
import {reducer, defaultState} from "./../../redux/reducer";



export default function Counter(){
    let [counterValue, incrementCounter] = useState(0);       
    let ref = useRef(null);
    let [state, dispatch] = useReducer(reducer, defaultState);

    //the useCallback hook returns the memoized function, this allow us to isolate resource intensive functions
    //so that it will not automatically run on every render.
    var incrementFunction = useCallback(()=>{
        if(counterValue < 3)
            incrementCounter(counterValue + 1);
    });
    // The main difference between useCallBack and useMemo is that useMemo returns a memoized value
    //while useCallback returns the memoized function.
    let counterSquared = useMemo(()=>counterValue * counterValue, [counterValue]);

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
            <h1>{counterSquared}</h1>
            <button onClick={incrementFunction}>Increment</button>

            {state.isErrorDisplayed && <button onClick={()=>incrementCounter(0)}>Reset</button>}

            <button onClick={changeColor}>Change color</button>
        </div>
        <p>The limit to the above counter is 3 try reaching it.</p>
        </center>
    </>
}