import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent, useRef, useState} from "react";

const meta = {
    title: 'Uncontrolled Components/input',
    tags: ['autodocs'],
} satisfies Meta;

export default meta

type Story = StoryObj


export const Input: Story = {
    render: function Render() {
        return <input value={'js'}/>
    }
}
export const UncontrolledInput: Story = {
    render: function Render() {
        return <input/>
    }
}
export const TrackValueOfUncontrolledInput: Story = {
    render: function Render() {
        const [value, setValue] = useState('');
        return <div><input onChange={(e) => setValue(e.currentTarget.value)}/> {value}</div>
    }
}

export const TrackValueOfUncontrolledInputWithRef: Story = {
    render: function Render() {
        const [value, setValue] = useState('');
        const refInput = useRef<HTMLInputElement>(null);
        const saveValue = () => {
            const valueInput = refInput.current as HTMLInputElement;
            setValue(valueInput.value)
        }
        return <div>
            <input ref={refInput}/>
            <button onClick={saveValue}>Click</button>
            {value}
        </div>
    }
}

export const ControlledInput: Story = {
    render: function Render() {
        const [value, setValue] = useState('');
        const OnChange = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
        }
        return <div><input value={value} onChange={OnChange}/> {value}</div>
    }
}
export const ControlledCheckbox: Story = {
    render: function Render() {
        const [value, setValue] = useState(false);
        const OnChange = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.checked)
        }
        return <div><input type={"checkbox"} checked={value} onChange={OnChange}/> </div>
    }
}

export const ControlledSelect: Story = {
    render: function Render() {
        const [value, setValue] = useState('2');
        const OnChange = (e: ChangeEvent<HTMLSelectElement>) => {
            setValue(e.currentTarget.value)
        }
        return <div>
            <select value={value} onChange={OnChange}>
                <option value={'1'}>1</option>
                <option value={'2'}>2</option>
                <option value={'3'}>3</option>
            </select>
        </div>
    }
}

