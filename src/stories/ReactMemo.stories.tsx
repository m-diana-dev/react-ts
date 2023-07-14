import type {Meta, StoryObj} from '@storybook/react';
import React, {ChangeEvent, useRef, useState} from "react";
import {Rating, RatingValueType} from "../components/Rating/Rating";
import buttonStories from "./Button.stories";

const meta = {
    title: 'React Memo Demo',
} satisfies Meta;

export default meta

type Story = StoryObj

export const Counter = (props: {count: number}) => {
    console.log("Render Counter")
    return (
        <div>
            <div>{props.count}</div>
        </div>
    )
}

const UsersSecret = (props: { users: string[] }) => {
    console.log("Render Users")
    return <div>{props.users.map(el => el)}</div>
}
const Users = React.memo(UsersSecret)
export const example1: Story = {
    render: function Render() {
        const [value, setValue] = useState(0);
        const [users, setUsers] = useState(['Ivan', 'Ivan1', 'Ivan2']);
        console.log("Render Helps")
        return <div>
            <button onClick={()=>setValue(value+1)}>Click</button>
            <Counter count={value}/>
            <Users users={users}/>
        </div>
    }
}
