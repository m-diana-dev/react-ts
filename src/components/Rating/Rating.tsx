import React from "react";

export function Rating() {
    console.log('rating rendered')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    console.log('star rendered')
    return (
        <span>star </span>
    )
}