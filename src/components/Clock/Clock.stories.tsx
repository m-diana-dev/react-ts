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


export const Clock2: Story = {
    render: function Render () {
        return <Clock/>
    }
}

