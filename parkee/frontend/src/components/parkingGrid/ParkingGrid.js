import React from 'react';
import './ParkingGrid.css';
import MyParkingLot from '../UI/parkingLot/MyParkingLot';


export default function ParkingGrid() {
	return (
		<div className='wrapper'>
			{new Array(70).fill(0).map(e => <MyParkingLot />)}
		</div>
	)
}
