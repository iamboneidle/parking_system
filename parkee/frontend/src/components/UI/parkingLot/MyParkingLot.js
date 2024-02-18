import React from 'react';
import './MyParkingLot.css';


export default function MyParkingLot(props) {
    const isAvailable = props.lot.is_available ? 'MyParkingLot available' : 'MyParkingLot unavailable'

    return (
        <button className={ isAvailable } onClick={() => {
            if (props.lot.is_available) props.setVisible(true);
            props.handleLotId(props.lot.parking_lot_id);
        }}>
            { props.lot.parking_lot_id }
        </button>
    )
}
