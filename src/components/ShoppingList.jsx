import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function ShoppingList({ list, onDelete }) {
  return (
    <Box sx={{ bgcolor: '#ecf0f1', borderRadius: '7px' }}>
      <List dense={false}>
        {list.map(({ id, name }) => (
          <ListItem
            key={id}
            secondaryAction={(
              <IconButton onClick={() => onDelete(id)} edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
          )}
          >
            <ListItemAvatar>
              <Avatar>
                <ShoppingBasketIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} />
          </ListItem>
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
