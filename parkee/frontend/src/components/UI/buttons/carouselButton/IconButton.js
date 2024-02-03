import React from 'react';
import './IconButton.css';


export default function IconButton({
    direction,
    isDisabled,
    onClick
    }) {
    let cls = 'icon-button'

    if (direction === 'left') cls += ' left'
    if (direction === 'right') cls += ' right'
    if (isDisabled) cls += ' disabled'

    return (
        <div className={cls} onClick={onClick}>

        </div>
    )
}
