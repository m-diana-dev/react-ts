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

export const clockExample: Story = {

    render: function Render() {

        let date = new Date();
        const [hours, setHours] = useState(date.getHours());
        const [minutes, setMinutes] = useState(date.getMinutes());
        const [seconds, setSeconds] = useState(date.getSeconds());

        useEffect(() => {
            setSeconds(date.getSeconds())
            setMinutes(date.getMinutes())
            setHours(date.getHours())
        }, [])

        useEffect(() => {
            setTimeout(() => {
                setSeconds(second => second + 1)
            }, 1000)
        }, [seconds])
        useEffect(() => {
            if (seconds === 60) {
                setSeconds(0)
                setMinutes(minute => minute + 1)
            }
        }, [seconds])
        useEffect(() => {
            if (minutes === 59 && seconds === 60) {
                setMinutes(0)
                setHours(hours => hours + 1)
            }
        }, [minutes, seconds])
        useEffect(() => {
            if (hours === 23 && minutes === 59 && seconds === 60) {
                setSeconds(0)
                setMinutes(0)
                setHours(0)
            }
        }, [minutes, seconds, hours])

        return <div>
            {hours}:{minutes}:{seconds}
        </div>
    }
}