import React, { useEffect, useState } from 'react';
import './ParkingGrid.css';
import MyParkingLot from '../UI/parkingLot/MyParkingLot';


function getCSRFToken() {
	const cookieValue = document.cookie
		.split('; ')
		.find(row => row.startsWith('csrftoken='))
		.split('=')[1];
	return cookieValue;
}

const getInfo = async () => {
	const requestOptions = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': getCSRFToken(),
		},
	};
	const response = await fetch("backend/get-parking-grid", requestOptions)
	const data = await response.json()

	return data
}


export default function ParkingGrid({ setVisible, handleLotId }) {
	const [lots, setLots] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
		  const data = await getInfo();
		  setLots(data);
		};
	
		fetchData();
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			const unavailable = lots.filter(lot => !lot.is_available)

			unavailable.forEach(lot => {
				let curTime = new Date();
				let stopReservationTime = new Date(lot.stop_reservation);
				stopReservationTime.setHours(stopReservationTime.getHours() - 3);
				let stopForComparison = stopReservationTime.getTime();
				let curForComparison = curTime.getTime();
				if (stopForComparison < curForComparison) {
					const requestOptions = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'X-CSRFToken': getCSRFToken(),
						},
						body: JSON.stringify({
							id: lot.parking_lot_id
						}),
					}
					fetch("backend/relieve-lot", requestOptions)
					.then((response) => {
						return response.json()
					})
					.then((data) => {
						console.log(data);
						location.reload()
					})
				}
			})
		}, 5000)
	})

	return (
		<div className='wrapper'>
			{lots.map((lot) => <MyParkingLot 
										key={lot.id}
										handleLotId={ handleLotId } 
										setVisible={ setVisible } 
										lot={ lot }
									/>
			)}
		</div>
	)
}
