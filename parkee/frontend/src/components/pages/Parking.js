import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import ParkingGrid from '../parkingGrid/parkingGrid';
import MyModal from '../UI/modalWindow/MyModal';
import MyModalFilling from '../UI/modalWindow/modalFilling/MyModalFilling';


export default function Parking() {

    const [modal, setModal] = useState(false);


    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
                <MyModal visible={modal} setVisible={setModal}>
                    <MyModalFilling />
                </MyModal>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography>
                    This is the parking page of parkee project
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <ParkingGrid setVisible={setModal}>
                    
                </ParkingGrid>
            </Grid>
        </Grid>
    )
}
