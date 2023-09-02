import React, {useEffect, useState} from 'react';
import {addZero} from "./utilFunctionForClock";


export const MyClock = () => {
    let date = new Date();
    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [seconds, setSeconds] = useState(date.getSeconds());

    useEffect(() => {
        setSeconds(date.getSeconds())
        setMinutes(date.getMinutes())
        setHours(date.getHours())
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setSeconds(second => second + 1)
        }, 1000)
    }, [seconds])
    useEffect(() => {
        if (seconds === 60) {
            setSeconds(0)
            setMinutes(minute => minute + 1)
        }
    }, [seconds])
    useEffect(() => {
        if (minutes === 59 && seconds === 60) {
            setMinutes(0)
            setHours(hours => hours + 1)
        }
    }, [minutes, seconds])
    useEffect(() => {
        if (hours === 23 && minutes === 59 && seconds === 60) {
            setSeconds(0)
            setMinutes(0)
            setHours(0)
        }
    }, [minutes, seconds, hours])
    return (
        <div>
            {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
        </div>
    );
};
