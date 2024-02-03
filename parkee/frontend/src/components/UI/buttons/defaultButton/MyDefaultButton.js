import React from 'react';
import './MyDefaultButton.css';


export default function MyDefaultButton({children, ...props}) {
    return (
        <button className='MyDefaultButton'>
            {children}
        </button>
    )
}
