import React from "react";


export type ItemType = {
    name: string
    value: any
}
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
    items:ItemType[]
    onClickItems: (value:any)=>void
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle accordionTitle={props.accordionTitle} onClick={props.onClick} collapsed={props.collapsed} color={props.color}/>
                {!props.collapsed && <AccordionBody items={props.items} onClickItems={props.onClickItems}/>}
            </div>
        )
}


type AccordionTitlePropsType = {
    accordionTitle: string
    collapsed: boolean
    onClick: (accordionCollapsed:boolean)=>void
    color?:string
}
type AccordionBodyPropsType = {
    items:ItemType[]
    onClickItems: (value:any)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('accordion title rendered')
    return (
        <h3 onClick={()=>props.onClick(!props.collapsed)} style={{color: props.color ? props.color : 'black'}}>{props.accordionTitle}</h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('accordion body rendered')
    return (
        <ul>
            {props.items.map((el,index)=><li onClick={()=>props.onClickItems(el.value)} key={index}>{el.name}</li>)}
        </ul>
    )
}
