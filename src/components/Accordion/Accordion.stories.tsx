import type { Meta, StoryObj } from '@storybook/react';
import {Accordion} from "./Accordion";
import React, {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        }
    }
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
        collapsed: false,
        items: []
    },
};

export const AccordionChange: Story = {
    render: function Render () {
        const [value, setValue] = useState<boolean>(true);
        return <Accordion accordionTitle={'Menu'}
                          collapsed={value}
                          onClick={()=>setValue(!value)}
                          onClickItems={(value)=>{alert(value)}}
        items={[{name:'Ivan-1',value:1 },{name:'Ivan-2',value:2 }]}/>
    }
}

