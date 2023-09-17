import type { Meta, StoryObj } from '@storybook/react';
import React, {useState} from "react";
import {Clock} from "./Clock";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Clock',
    component: Clock,
    tags: ['autodocs'],
} satisfies Meta<typeof Clock>;

export default meta

type Story = StoryObj<typeof Clock>


export const ClockAnalog: Story = {
    render: function Render () {
        return <Clock mode={'analog'}/>
    }
}

export const ClockDigital: Story = {
    render: function Render () {
        return <Clock mode={'digital'}/>
    }
}

