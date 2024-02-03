import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import ParkingGrid from './parkingGrid/parkingGrid';


export default function Parking() {
  return (
    <Grid container spacing={1}>
        <Grid item xs={12} align='center'>
            <Typography>
                This is the parking page of parkee project
            </Typography>
        </Grid>
		<Grid item xs={12} align='center'>
            <ParkingGrid>
                
            </ParkingGrid>
		</Grid>
    </Grid>
  )
}
