import React, {useState} from "react";

type AccordionPropsType = {
    accordionTitle: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [title, setTitle] = useState(true)
    const toggleAcc = ()=>{
        setTitle(!title)
    }
        return (
            <div>
                <AccordionTitle accordionTitle={props.accordionTitle} toggleAcc={toggleAcc}/>
                {!title && <AccordionBody/>}
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
