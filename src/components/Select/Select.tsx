import React, {useState} from "react";
import s from './Select.module.css'


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
    const [active, setActive] = useState(false)
    let selectedItem = props.items.find(i=>i.value === props.value)
    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value:any) => {
        props.onChange(value);
        toggleItems()
    }
        return (
            <div className={s.select}>
                <div className={s.selectTitle} onClick={toggleItems}><b>{selectedItem && selectedItem.title}</b></div>
                {
                    active &&
                    <div className={s.selectItems}>
                        {props.items.map(el=><div className={s.selectItem + ' ' + (selectedItem === el ? s.selected : '')}
                                                  onClick={()=>onItemClick(el.value)}>{el.title}</div>)}
                    </div>
                }
            </div>
        )
}
