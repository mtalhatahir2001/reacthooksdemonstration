import React from "react";
import "./error.css";


export default function Error({discription}){
    return <>
        <div className="errorWrapper">
            <div className="disc">
                {discription}
            </div>
        </div>
    </>

}