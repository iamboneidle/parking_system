import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import ParkingGrid from '../parkingGrid/ParkingGrid';
import MyDefaultButton from '../UI/buttons/defaultButton/MyDefaultButton';
import MyModal from '../UI/modalWindow/MyModal';
import { Link } from "react-router-dom";


export default function Parking() {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = (e) => {
        setOpen(false);
    };
    const handleCancel = (e) => {
        setOpen(false);
    };

    const handleLotId = (id) => {
        setId(id);
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
                <MyModal 
                    open={ open } 
                    setOpen={ setOpen } 
                    handleOk={ handleOk } 
                    handleCancel={ handleCancel } 
                    showModal={ showModal }
                    id={ id }
                />
            </Grid>
            <Grid item xs={12} align='center'>
                <ParkingGrid setVisible={ showModal } handleLotId={ handleLotId }/>
            </Grid>
            <Grid item xs={12} align='center'>
                <Link to='/home' >
                    <MyDefaultButton>
                        Go Home
                    </MyDefaultButton>
                </Link>
            </Grid>
        </Grid>
    )
}
