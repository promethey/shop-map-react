import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { v4 as uuid } from 'uuid'; // eslint-disable-line
import ShoppingList from './ShoppingList';
import AppContext from '../context/AppContext';
import NotFoundBox from './NotFoundBox';
import AddButton from './AddButton';

function ShoppingTodo() {
  const [productName, setProductName] = useState('');
  const { currentShopId } = useContext(AppContext);

  const [shoppingList, setShoppingList] = useState(() => {
    if (currentShopId) {
      const localShoppingList = JSON.parse(
        localStorage.getItem(JSON.stringify({ id: currentShopId })),
      );
      if (localShoppingList) {
        return localShoppingList;
      }
    }
    return [];
  });

  const addProduct = (prdName) => {
    setShoppingList((prev) => [{
      id: uuid(),
      name: prdName,
      shopId: currentShopId,
    }, ...prev]);
    setProductName('');
  };

  const dropProduct = (prdId) => {
    setShoppingList((prev) => prev.filter(({ id }) => id !== prdId));
  };

  useEffect(() => { // eslint-disable-line
    if (currentShopId) {
      const localShoppingList = JSON.parse(
        localStorage.getItem(JSON.stringify({ id: currentShopId })),
      );
      if (localShoppingList) {
        setShoppingList(localShoppingList);
        return;
      }
      setShoppingList([]);
    }
  }, [currentShopId]);

  useEffect(() => {
    if (currentShopId) {
      localStorage.setItem(JSON.stringify({ id: currentShopId }), JSON.stringify(shoppingList));
    }
  }, [shoppingList]);

  return (
    <Box p={3} mt={2} sx={{ border: '1px solid #bdc3c7', borderRadius: '7px' }}>
      <Typography variant="h6" mb={3}>
        What do you want to buy?
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="end"
        component="form"
        noValidate
        autoComplete="off"
        my={2}
      >
        <TextField
          variant="outlined"
          value={productName}
          label="Product name (iPhone etc.)"
          fullWidth
          onChange={(event) => setProductName(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              addProduct(productName);
              event.preventDefault();
            }
          }}
          sx={{ display: 'block', mb: 2 }}
          helperText="Please enter product name"
        />
        <AddButton
          disabled={!productName}
          onClick={() => addProduct(productName)}
        />
      </Box>
      {shoppingList.length > 0 ? (
        <ShoppingList onDelete={dropProduct} list={shoppingList} />
      ) : (
        <NotFoundBox />
      )}
    </Box>
  );
}

export default ShoppingTodo;
