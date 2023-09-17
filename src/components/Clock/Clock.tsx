import React, {useEffect, useState} from 'react';
import {addZero} from "./utilFunctionForClock";
import styles from './Clock.module.css'

type ClockPropsType = {
    mode: 'analog' | 'digital'
}
export const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
            console.log("TICK")
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return (
        <>
            {
                props.mode === 'digital'
                    ? <div>
                        {addZero(date.getHours())}:{addZero(date.getMinutes())}:{addZero(date.getSeconds())}
                    </div>
                    : <div className={styles.clock}>
                        <div className={styles.analogClock}>
                            <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
                            <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
                            <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
                        </div>
                    </div>
            }
        </>

    );
};
