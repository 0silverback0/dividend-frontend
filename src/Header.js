import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const targetUrl = location.pathname === '/' ? '/m' : '/';

  // Define the button text based on the current location
  const buttonText =
    location.pathname === '/' ? 'Stock Compare' : 'Stock Chart';

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Dividend App
        </Typography>
      </Toolbar>
      <Button href={targetUrl} style={buttonStyle} variant="contained" color="secondary">
        {buttonText}
      </Button>
    </AppBar>
  );
}

export default Header;
