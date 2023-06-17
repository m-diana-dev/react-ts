import React from "react";

type AccordionPropsType = {
    /**
     * sets the title of the menu
     */
    accordionTitle: string
    /**
     * shows closed or open
     */
    collapsed: boolean
    onClick: (accordionCollapsed:boolean)=>void
    color?:string
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle accordionTitle={props.accordionTitle} onClick={props.onClick} collapsed={props.collapsed} color={props.color}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}


type AccordionTitlePropsType = {
    accordionTitle: string
    collapsed: boolean
    onClick: (accordionCollapsed:boolean)=>void
    color?:string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('accordion title rendered')
    return (
        <h3 onClick={()=>props.onClick(!props.collapsed)} style={{color: props.color ? props.color : 'black'}}>{props.accordionTitle}</h3>
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
