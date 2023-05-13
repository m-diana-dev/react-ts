import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    console.log('app rendered')
    return (
        <div>
            {/*<PageTitle title={'Title'}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<UncontrolledAccordion accordionTitle={'UncontrolledAccordion 1'} collapsed={true}/>*/}
            {/*<UncontrolledAccordion accordionTitle={'UncontrolledAccordion 2'} collapsed={false}/>*/}
            {/*<PageTitle title={'Title2'}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<PageTitle title={'Switch'}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<PageTitle title={'Switch'}/>*/}
            {/*<OnOff on={false}/>*/}
            <UncontrolledAccordion accordionTitle={'UncontrolledAccordion 1'}/>
            <Rating/>
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
