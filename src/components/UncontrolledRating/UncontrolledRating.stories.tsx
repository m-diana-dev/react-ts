import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";
import React, {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/UncontrolledRating',
    component: UncontrolledRating,
    tags: ['autodocs'],
    argTypes: {
        onChange: {action: 'rating changed inside component'}
    }
} satisfies Meta<typeof UncontrolledRating>;

export default meta

type Story = StoryObj<typeof UncontrolledRating>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const UncontrolledRating1: Story = {
    args: {
        defaultValue: 1
    },
};
export const UncontrolledRating2: Story = {
    args: {
        defaultValue: 2
    },
};
export const UncontrolledRating3: Story = {
    args: {
        defaultValue: 3
    },
};
export const UncontrolledRating4: Story = {
    args: {
        defaultValue: 4
    },
};
export const UncontrolledRating5: Story = {
    args: {
        defaultValue: 5
    },
};

