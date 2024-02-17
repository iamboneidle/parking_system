import React from 'react';
import './ParkingGrid.css';
import MyParkingLot from '../UI/parkingLot/MyParkingLot';


export default function ParkingGrid({setVisible, handleLotId}) {
	return (
		<div className='wrapper'>
			{new Array(70).fill(0).map((e, index) => <MyParkingLot 
														handleLotId={ handleLotId } 
														setVisible={ setVisible } 
														id={ index + 1 }
													/>
			)}
		</div>
	)
}
