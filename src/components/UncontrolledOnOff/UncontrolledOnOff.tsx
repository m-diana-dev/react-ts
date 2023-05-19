import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    // value: string
    // on: boolean
    onChange: (on: boolean)=>void
}
export const UncontrolledOnOff = (props: OnOffPropsType) => {
    // const btnOn = props.value === 'on' ? s.green : '';
    // const btnOff = props.value === 'off' ? s.red : '';
    // const bulb = s.bulb + ' ' + (props.value === 'on' ? s.green : s.red);

    // const on = false;

    const [on, setOn] = useState<boolean>(false)

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

    const onClicked = () => {
        setOn(true);
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false);
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>on</div>
            <div style={offStyle} onClick={offClicked}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );

};
