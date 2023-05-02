import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoImage from './LogoImage';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LogoImage />
          <Typography
            display="block"
            variant="h6"
            component="div"
            sx={{
              textTransform: 'uppercase',
              fontWeight: '800',
              flexGrow: 1,
              marginLeft: '7px',
            }}
          >
            ShopMap
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
