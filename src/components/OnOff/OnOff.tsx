import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on:boolean
    onClick: (on:boolean)=>void
}
export const OnOff: React.FC<OnOffPropsType> = (props) => {
    const{on,onClick}=props;

    const onStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        padding: '10px',
        marginRight: '10px',
        display: 'inline-block',
        background: on ? 'green' : 'grey'
    }
    const offStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        padding: '10px',
        marginRight: '10px',
        display: 'inline-block',
        background: on ? 'grey' : 'red'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        background: on ? 'green' : 'red'
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>onClick(true)}>on</div>
            <div style={offStyle} onClick={()=>onClick(false)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );

};
