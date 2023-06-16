import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import React, {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/UncontrolledOnOff',
    component: UncontrolledOnOff,
    tags: ['autodocs'],
} satisfies Meta<typeof UncontrolledOnOff>;

export default meta

type Story = StoryObj<typeof UncontrolledOnOff>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const UncontrolledOnChange: Story = {
    render: function Render () {
        const [value, setValue] = useState<boolean>(true);
        return <UncontrolledOnOff defaultOn={true} onChange={setValue}/>
    }
}

export const UncontrolledOffChange: Story = {
    render: function Render () {
        const [value, setValue] = useState<boolean>(true);
        return <UncontrolledOnOff defaultOn={false} onChange={setValue}/>
    }
}

