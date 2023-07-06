import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'


export type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    let selectedItem = props.items.find(i => i.value === props.value)
    let hoveredItem = props.items.find(i => i.value === hoveredElement)
    const toggleItems = () => {
        setActive(!active)
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return
                    }
                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === "Escape" || e.key === "Enter") {
            setActive(false)
        }
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    return (
        <div className={s.select}>
            <div className={s.selectTitle} onClick={toggleItems} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <b>{selectedItem && selectedItem.title}</b></div>
            {
                active &&
                <div className={s.selectItems}>
                    {props.items.map(el => <div onMouseEnter={() => setHoveredElement(el.value)}
                                                className={s.selectItem + ' ' + (hoveredItem === el ? s.selected : '')}
                                                onClick={() => onItemClick(el.value)}>{el.title}</div>)}
                </div>
            }
        </div>
    )
}
