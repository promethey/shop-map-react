import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import AspectRatio from '@mui/joy/AspectRatio';
import Navbar from './components/Navbar';
import ViewMap from './components/ViewMap';

function App() {
  return (
    <div style={{ fontFamily: 'Roboto' }}>
      <Navbar />
      <Container maxWidth="xl" sx={{ my: 2 }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box sx={{ height: 700 }}>
                <ViewMap />
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box p={2} sx={{ bgcolor: 'aqua', height: 300 }}>
                Inforamtion
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
