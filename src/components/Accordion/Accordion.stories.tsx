import type { Meta, StoryObj } from '@storybook/react';
import {Accordion} from "./Accordion";
import React, {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/Accordion',
    component: Accordion,
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta

type Story = StoryObj<typeof Accordion>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const CollapsedMode: Story = {
    args: {
        accordionTitle: 'Menu',
        collapsed: true
    },
};
export const UncollapsedMode: Story = {
    args: {
        accordionTitle: 'Menu',
        collapsed: false
    },
};

export const AccordionChange: Story = {
    render: function Render () {
        const [value, setValue] = useState<boolean>(true);
        return <Accordion accordionTitle={'Menu'} collapsed={value} onClick={()=>setValue(!value)}/>
    }
}

