import React, { useState, useMemo } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';
import ViewMap from './components/ViewMap';
import ShopCard from './components/ShopCard';
import shopList from './data/shopList';
import AppContext from './context/AppContext';
import ShoppingTodo from './components/ShoppingTodo';

function App() {
  const [currentShopId, setCurrentShopId] = useState(null);

  const getCurrentShop = (shopId) => shopList.find(({ id }) => id === shopId);

  const currentShop = useMemo(() => ({ currentShopId, setCurrentShopId }), [currentShopId]);

  return (
    <AppContext.Provider value={currentShop}>
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
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="gray"
                    sx={{ border: '1px dashed gray', borderRadius: '7px', height: '250px' }}
                  >
                    <Typography variant="h6">
                      Please, select a shop
                    </Typography>
                  </Box>
                )}
                {currentShopId && <ShoppingTodo />}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </AppContext.Provider>
  );
}

export default App;
