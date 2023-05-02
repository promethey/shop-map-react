import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ShoppingListItem from './ShoppingListItem';

function ShoppingList({ list, onDelete }) {
  return (
    <Box sx={{ bgcolor: '#ecf0f1', borderRadius: '7px' }}>
      <List dense={false}>
        {list.map((shop, index) => (
          <ShoppingListItem
            shop={shop}
            index={index}
            onDelete={onDelete}
          />
        ))}
      </List>
    </Box>
  );
}

ShoppingList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ShoppingList;
