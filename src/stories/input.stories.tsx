import type { Meta, StoryObj } from '@storybook/react';
import React, {useRef, useState} from "react";
import {Rating, RatingValueType} from "../components/Rating/Rating";

const meta = {
    title: 'Uncontrolled Components/input',
    // component: UncontrolledAccordion,
    tags: ['autodocs'],
} satisfies Meta;

export default meta

type Story = StoryObj


export const Input: Story = {
    render: function Render () {
        return <input value={'js'}/>
    }
}
export const UncontrolledInput: Story = {
    render: function Render () {
        return <input/>
    }
}
export const TrackValueOfUncontrolledInput: Story = {
    render: function Render () {
        const [value, setValue] = useState('');
        return <div><input onChange={(e)=>setValue(e.currentTarget.value)}/> {value}</div>
    }
}

export const TrackValueOfUncontrolledInputWithRef: Story = {
    render: function Render () {
        const [value, setValue] = useState('');
        const refInput = useRef<HTMLInputElement>(null);
        const saveValue = () => {
            const valueInput = refInput.current as HTMLInputElement;
            setValue(valueInput.value)
        }
        return <div>
            <input ref={refInput}/>
            <button onClick={saveValue}>Click</button> {value}
        </div>
    }
}

