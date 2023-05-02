import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';
import ViewMap from './components/ViewMap';
import ShopCard from './components/ShopCard';
import shopList from './data/shopList';
import AppContext from './context/AppContext';

function App() {
  const [currentShopId, setCurrentShopId] = useState(null);

  const getCurrentShop = (shopId) => shopList.find(({ id }) => id === shopId);

  return (
    <AppContext.Provider value={setCurrentShopId}>
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
                {currentShopId ? (
                  <ShopCard shop={getCurrentShop(currentShopId)} />
                ) : (
                  <Box>
                    <Typography>
                      Please, select a shop
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </AppContext.Provider>
  );
}

export default App;
