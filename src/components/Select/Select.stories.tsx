import type { Meta, StoryObj } from '@storybook/react';
import {Select} from "./Select";
import React, {useState} from "react";

const meta = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta

type Story = StoryObj<typeof Select>


export const SelectComponents: Story = {
    render: function Render () {
        const [value, setValue] = useState<boolean>(true);
        return <Select value={'title'} items={[{title:'Ivan-1',value:1 },{title:'Ivan-2',value:2 }]} onChange={()=>{}}/>
    }
}

