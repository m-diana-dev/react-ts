import React, {useEffect, useState} from 'react';
import {addZero} from "./utilFunctionForClock";
import {clear} from "@testing-library/user-event/dist/clear";


export const Clock = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
            console.log("TICK")
        }, 1000)
        return ()=>{
            clearInterval(intervalID)
        }
    }, [])
    return (
        <div>
            {addZero(date.getHours())}:{addZero(date.getMinutes())}:{addZero(date.getSeconds())}
        </div>
    );
};
