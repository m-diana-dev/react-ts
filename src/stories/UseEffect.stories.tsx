import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent, useEffect, useMemo, useRef, useState} from "react";
import {Rating, RatingValueType} from "../components/Rating/Rating";
import buttonStories from "./Button.stories";

const meta = {
    title: 'Use Effect Demo',
} satisfies Meta;

export default meta

type Story = StoryObj

export const example1: Story = {
    render: function Render() {
        const [value, setValue] = useState(0);
        const [fake, setFake] = useState(0);

        useEffect(() => {
            console.log('useEffect every render')
            //side effects
        })

        useEffect(() => {
            console.log('useEffect only firs render (componentDidMount)')
            //side effects
            document.title = value.toString()
        }, [])

        useEffect(() => {
            console.log('useEffect firs render and every value change')
            //side effects
        }, [value])

        return <div>
            <h1>Hello!</h1>
            <button onClick={() => setValue(value + 1)}>Click Value</button>
            <span>{value}</span>
            <button onClick={() => setFake(fake + 1)}>Click Fake</button>
            <span>{fake}</span>
        </div>
    }
}


export const SetTimeOutExample: Story = {
    render: function Render() {
        const [value, setValue] = useState(0);
        const [fake, setFake] = useState(0);


        useEffect(() => {
            //side effects
            setTimeout(() => {
                console.log('set time out')
                document.title = value.toString()
            }, 1000)
        }, [value])

        return <div>
            <h1>Hello!</h1>
            <button onClick={() => setValue(value + 1)}>Click Value</button>
            <span>{value}</span>
            <button onClick={() => setFake(fake + 1)}>Click Fake</button>
            <span>{fake}</span>
        </div>
    }
}

export const SetIntervalExample: Story = {
    render: function Render() {
        const [value, setValue] = useState(0);
        const [fake, setFake] = useState(0);


        useEffect(() => {
            //side effects
            setInterval(() => {
                console.log('tick' + value)
                setValue(state => state + 1)
            }, 1000)
        }, [])

        return <div>
            <h1>Hello!</h1>
            <span>value: {value}</span>
            <span>fake: {fake}</span>
        </div>
    }
}

export const ResetEffectExample: Story = {
    render: function Render() {
        console.log('Component rendered')

        const [value, setValue] = useState(0);


        useEffect(() => {
            console.log('Effect occurred' + value)
            return ()=>{
                console.log('Effect reset')
            }
        }, [value])

        const increase = () => {
            setValue(value+1)
        }

        return <div>
            <button onClick={increase}>{value}</button>
        </div>
    }
}

export const KeyTrackExample: Story = {
    render: function Render() {

        const [value, setValue] = useState('');

        console.log('Component rendered' + value)

        useEffect(() => {
            console.log('Effect occurred' + value)
            const handler = (e: KeyboardEvent)=>{
                console.log(e.key)
                setValue(state=>state+e.key)
            }
            window.addEventListener('keypress', handler)
            return ()=>{
                window.removeEventListener('keypress', handler)
            }
        }, [])


        return <div>
            text: {value}
        </div>
    }
}
