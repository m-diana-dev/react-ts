import React from "react";

type AccordionPropsType = {
    accordionTitle: string
    collapsed: boolean
    onClick: (accordionCollapsed:boolean)=>void
}

function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle accordionTitle={props.accordionTitle} onClick={props.onClick} collapsed={props.collapsed}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}


type AccordionTitlePropsType = {
    accordionTitle: string
    collapsed: boolean
    onClick: (accordionCollapsed:boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('accordion title rendered')
    return (
        <h3 onClick={()=>props.onClick(!props.collapsed)}>{props.accordionTitle}</h3>
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

export default Accordion;