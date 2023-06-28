import React from "react";


export type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any)=>void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
        return (
            <div>
                <div>{}</div>
                {props.items.map(el=><div>{el.title}</div>)}
            </div>
        )
}
