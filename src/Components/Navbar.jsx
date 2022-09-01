import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Navbar = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: 'text.primary', alignItems: 'center' }}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    React Carousel
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar
