import React from "react";
import "./profile.css"
import { useCustomHook } from "../../customHook/useCustomHook";


export default function Profile(){
    let data = useCustomHook("https://api.github.com/users/mtalhatahir2001", "get");
    return <>
        <div className="outerDiv">
            <div>
                {data && <img className= "image" src= {data.avatar_url}/>}
            </div>
            <div className="name">
                {data && <p>{data.name}</p>}
            </div>
        </div>
    </>
}