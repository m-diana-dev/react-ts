import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent, useMemo, useRef, useState} from "react";
import {Rating, RatingValueType} from "../components/Rating/Rating";
import buttonStories from "./Button.stories";

const meta = {
    title: 'Use State Demo',
} satisfies Meta;

export default meta

type Story = StoryObj

const generateData = () => {
    //difficult counting
    console.log('generate_data')
    return 837594385
}
const changer = (state: number) => state+1
export const example1: Story = {
    render: function Render() {
        // const initialValue = useMemo(generateData, [])
        const [value, setValue] = useState(generateData);
        return <div>
            <button onClick={() => setValue(changer)}>Click</button>
            <span>{value}</span>
        </div>
    }
}
