import React from 'react';
import './MyParkingLot.css';


export default function MyParkingLot(props) {

    return (
        <button className='MyParkingLot' onClick={() => {props.setVisible(true); props.handleLotId(props.id)}}>
            { props.id }
        </button>
    )
}
