import type { Meta, StoryObj } from '@storybook/react';
import {OnOff} from "./OnOff";
import React, {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/OnOff',
    component: OnOff,
    tags: ['autodocs'],
} satisfies Meta<typeof OnOff>;

export default meta

type Story = StoryObj<typeof OnOff>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const OffMode: Story = {
    args: {
        on: false
    },
};
export const OnMode: Story = {
    args: {
        on: true
    },
};

export const OnOffChange: Story = {
    render: function Render () {
        const [value, setValue] = useState<boolean>(true);
        return <OnOff on={value} onClick={setValue}/>
    }
}

