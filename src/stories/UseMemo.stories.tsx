import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent, useMemo, useRef, useState} from "react";
import {Rating, RatingValueType} from "../components/Rating/Rating";
import buttonStories from "./Button.stories";
import {Counter} from "./ReactMemo.stories";
import {Select, SelectWhitMemo} from "../components/Select/Select";

const meta = {
    title: 'Use Memo Demo',
} satisfies Meta;

export default meta

type Story = StoryObj

export const DifficultCounting: Story = {
    render: function Render() {
        const [a, setA] = useState(5);
        const [b, setB] = useState(5);

        let resultA = 1;
        let resultB = 1;

        resultA = useMemo(()=>{
            let tempResultA = 1;
            for (let i=1; i<=a; i++)
            {
                let fake = 0;
                while (fake < 100000000) {
                    fake++;
                    const fakeValue = Math.random();
                }
                tempResultA *= i;
            }
            return tempResultA
        }, [a])

        for (let i=1; i<=b; i++){
            resultB *= i;
        }

        return <div>
            <input value={a} onChange={(e)=>{setA(Number(e.currentTarget.value))}}/>
            <input value={b} onChange={(e)=>{setB(Number(e.currentTarget.value))}}/>
            <div>
                Result for A {resultA}
            </div>
            <div>
                Result for B {resultB}
            </div>
        </div>
    }
}

const UsersSecret = (props: { users: string[] }) => {
    console.log("Render Users")
    return <div>{props.users.map(el => el)}</div>
}
const Users = React.memo(UsersSecret)
export const HelpToReactMemo: Story = {
    render: function Render() {
        const [value, setValue] = useState(0);
        const [users, setUsers] = useState(['Ivan', 'Ivan1', 'Ivan2']);
        console.log("Render Helps")
        const newArray = useMemo(()=>{
            return users.filter(el=>el.toLowerCase().indexOf("a")>-1)
        },[users])
        return <div>
            <button onClick={()=>setValue(value+1)}>Click</button>
            {value}
            <Users users={newArray}/>
        </div>
    }
}

export const SelectReactMemo: Story = {
    render: function Render() {
        const [count, setCount] = useState(0);
        const [value, setValue] = useState('2');
        const [cities, setCities] = useState([
            {title:'Moscow',value:'1', country: 'Russia', population: 100 },
            {title:'Samara',value:'2', country: 'Russia', population: 50 },
            {title:'Minsk',value:'3', country: 'Belarus', population: 100 },
            {title:'Bobruysk',value:'4', country: 'Belarus', population: 10 },
            {title:'Riga',value:'5', country: 'Latvia', population: 70 },
        ]);
        console.log("Render main")
        const citiesRussia = useMemo(()=>{
            return cities.filter(el=>el.country==='Russia')
        },[cities])
        const newPopulation = useMemo(()=>{
            return cities.filter(el=>el.population >= 100)
        },[cities])
        return <div>
            <button onClick={()=>setCount(count+1)}>Click</button>
            {count}

            <SelectWhitMemo value={value} items={cities} onChange={setValue}/>
            <SelectWhitMemo value={value} items={citiesRussia} onChange={setValue}/>
            <SelectWhitMemo value={value} items={newPopulation} onChange={setValue}/>
        </div>
    }
}
