import type { Meta, StoryObj } from '@storybook/react';
import React, {useState} from "react";
import {MyClock} from "./myClock";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/myClock',
    component: MyClock,
    tags: ['autodocs'],
} satisfies Meta<typeof MyClock>;

export default meta

type Story = StoryObj<typeof MyClock>


export const Clock1: Story = {
    render: function Render () {
        return <MyClock/>
    }
}

