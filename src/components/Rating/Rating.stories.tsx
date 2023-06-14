import type { Meta, StoryObj } from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";
import React, {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/Rating',
    component: Rating,
    tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta

type Story = StoryObj<typeof Rating>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const EmptyRating: Story = {
    args: {
        value: 0,
    },
};
export const Rating1: Story = {
    args: {
        value: 1,
    },
};
export const Rating2: Story = {
    args: {
        value: 2,
    },
};
export const Rating3: Story = {
    args: {
        value: 3,
    },
};
export const Rating4: Story = {
    args: {
        value: 4,
    },
};
export const Rating5: Story = {
    args: {
        value: 5,
    },
};

export const RatingChange: Story = {
    render: function Render () {
        const [value, setValue] = useState<RatingValueType>(0);
        return <Rating value={value} onClick={setValue}/>
    }
}

