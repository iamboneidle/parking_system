import React from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import MyDefaultButton from '../UI/buttons/defaultButton/MyDefaultButton';
import MyCarousel from '../UI/carousel/MyCarousel';
import { Link } from "react-router-dom";
import Title from '../UI/titles/Title';
import TextContent from '../UI/textContent/TextContent';


export default function Home({ isLoggedIn }) {
  return (
    <Grid container spacing={1}>
        <Grid item xs={12} align='center'>
            <TextContent />
        </Grid>
        {/* <Grid item xs={12} align='center'>
            <Typography>
                This is the home page of parkee project
            </Typography>
        </Grid> */}
        <Grid item xs={12} align='center'>
            <Link to={isLoggedIn ? '/parking' : '/login'} >
                <MyDefaultButton>
                    Go Parking
                </MyDefaultButton>
            </Link>
        </Grid>
    </Grid>
  )
}
