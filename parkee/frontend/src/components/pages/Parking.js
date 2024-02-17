import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import ParkingGrid from '../parkingGrid/parkingGrid';
import MyModal from '../UI/modalWindow/MyModal';


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
                <Typography>
                    This is the parking page of parkee project
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <ParkingGrid setVisible={ showModal } handleLotId={ handleLotId }/>
            </Grid>
        </Grid>
    )
}
