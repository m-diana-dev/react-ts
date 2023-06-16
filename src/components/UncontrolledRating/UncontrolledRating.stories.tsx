import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";
import React, {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/UncontrolledRating',
    component: UncontrolledRating,
    tags: ['autodocs'],
} satisfies Meta<typeof UncontrolledRating>;

export default meta

type Story = StoryObj<typeof UncontrolledRating>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const UncontrolledRatingChange: Story = {
    args: {

    },
};

