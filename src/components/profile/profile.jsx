import React, { useContext } from "react";
import "./profile.css"
import { UserContext } from "../../App";

export default function Profile(){
    let data = useContext(UserContext);
    
    return <>
        <div className="outerDiv">
            <div>
                <img className= "image" src= {data && data.avatar_url}/>
            </div>
            <div className="name">
                <p>{data && data.name}</p>
            </div>
        </div>
    </>
}