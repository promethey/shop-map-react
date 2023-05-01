import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Typography from '@mui/material/Typography';
import Navbar from './components/Navbar';
import ViewMap from './components/ViewMap';
import ShopCard from './components/ShopCard';
import shopList from './data/shopList';

function App() {
  return (
    <div style={{ fontFamily: 'Roboto' }}>
      <Navbar />
      <Container maxWidth="xl" sx={{ my: 2 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box sx={{ height: '600px' }}>
                <ViewMap />
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <ShopCard shop={shopList[0]} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
