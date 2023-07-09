import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    accordionTitle: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    const [state, dispatch] = useReducer(reducer, {collapsed:false})

    const toggleAcc = ()=>{
        dispatch({type: TOGGLE_COLLAPSED})
    }
        return (
            <div>
                <AccordionTitle accordionTitle={props.accordionTitle} toggleAcc={toggleAcc}/>
                {!state.collapsed && <AccordionBody/>}
            </div>
        )
}


type AccordionTitlePropsType = {
    accordionTitle: string
    toggleAcc: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = ()=>{
        props.toggleAcc()
    }
    return (
        <h3 onClick={onClickHandler}>{props.accordionTitle}</h3>
    )
}

function AccordionBody() {
    console.log('accordion body rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
