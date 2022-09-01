import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Footer = () => {
    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, bgcolor: 'text.primary' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 0 }}>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Footer
