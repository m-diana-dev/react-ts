import React, {useState} from "react";

type AccordionPropsType = {
    accordionTitle: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [title, setTitle] = useState(true)
    const onClickHandler = ()=>{
        if(title)setTitle(false)
        else setTitle(true)
    }
        return (
            <div>
                <AccordionTitle accordionTitle={props.accordionTitle}/>
                <button onClick={onClickHandler}>Toggle</button>
                {!title && <AccordionBody/>}
            </div>
        )
}


type AccordionTitlePropsType = {
    accordionTitle: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('accordion title rendered')
    return (
        <h3>{props.accordionTitle}</h3>
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

export default UncontrolledAccordion;