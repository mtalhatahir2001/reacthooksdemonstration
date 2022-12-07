//this is custom hook that is used to get response form and API. 
// this is just here to demonstrate how to create custom hooks

import { useState, useEffect } from "react";

export function useCustomHook(url, method){
    let [data, setData] = useState(null);

    useEffect(()=>{
        let http = new XMLHttpRequest();
        http.open(method, url, true);
        http.onreadystatechange = () => {
            if(http.readyState == 4 && http.status == 200){
                setData(JSON.parse(http.responseText));
            }
        }
        http.send();
    },[])
    
    return data;
}