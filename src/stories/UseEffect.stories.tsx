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

        useEffect(()=>{
            console.log('useEffect every render')
            //side effects
        })

        useEffect(()=>{
            console.log('useEffect only firs render (componentDidMount)')
            //side effects
            document.title = value.toString()
        }, [])

        useEffect(()=>{
            console.log('useEffect firs render and every value change')
            //side effects
        }, [value])

        return <div>
            <h1>Hello!</h1>
            <button onClick={() => setValue(value+1)}>Click Value</button>
            <span>{value}</span>
            <button onClick={() => setFake(fake+1)}>Click Fake</button>
            <span>{fake}</span>
        </div>
    }
}