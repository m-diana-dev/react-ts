import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import React, {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/UncontrolledAccordion',
    component: UncontrolledAccordion,
    tags: ['autodocs'],
} satisfies Meta<typeof UncontrolledAccordion>;

export default meta

type Story = StoryObj<typeof UncontrolledAccordion>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const UncontrolledAccordionChange: Story = {
    args: {
        accordionTitle: 'Menu',
    },
};

