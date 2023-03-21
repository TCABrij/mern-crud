import { Box, Grid } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <>
            <Grid container component="footer" p={2.5} bgcolor="rgba(0,0,0,0.8)" style={{ color: 'white' }} >
                <Grid item xs='12' sm='6' md='6' p='5' lg='6'>
                    <h2 style={{marginBottom: '1rem'}}>Quick Links</h2>
                    <div className="quick-links-box" style={{paddingLeft: '.5rem', marginBottom: '.5rem'}}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                    </div>
                </Grid>
                <Grid item xs='12' sm='6' md='6' p='5' lg='6'>
                    <h2 style={{marginBottom: '1rem'}}>Sites</h2>
                    <div className="sites-links-box" style={{paddingLeft: '.5rem', marginBottom: '.5rem'}}>
                        <div>Google</div>
                        <div>Microsoft</div>
                        <div>Meta</div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
