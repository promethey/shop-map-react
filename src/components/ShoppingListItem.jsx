import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function ShoppingListItem({ shop, index, onDelete }) {
  return (
    <>
      {index !== 0 && <Divider />}
      <ListItem
        key={shop.id}
        secondaryAction={(
          <IconButton
            onClick={() => onDelete(shop.id)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        )}
      >
        <ListItemAvatar>
          <Avatar>
            <ShoppingBasketIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={shop.name} />
      </ListItem>
    </>
  );
}

ShoppingListItem.propTypes = {
  shop: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ShoppingListItem;
