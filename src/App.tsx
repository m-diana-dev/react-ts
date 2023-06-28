import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log('app rendered')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)
    return (
        <div>
            {/*<PageTitle title={'Title'}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<UncontrolledAccordion accordionTitle={'UncontrolledAccordion 1'} collapsed={true}/>*/}
            {/*<Select accordionTitle={'Select'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>*/}
            {/*<PageTitle title={'Title2'}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<PageTitle title={'Switch'}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            <OnOff onClick={setOn} on={on}/>
            {/*<UncontrolledOnOff onChange={setOn}/> {on.toString()}*/}
            {/*<PageTitle title={'Switch'}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<UncontrolledAccordion accordionTitle={'UncontrolledAccordion 1'}/>*/}
            {/*<UncontrolledRating/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}



export default App;
