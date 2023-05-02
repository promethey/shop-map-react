import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function ShopCardRating({ rating }) {
  return (
    <Box mb={1} sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="p" sx={{ marginRight: '5px', color: 'gray' }}>
        {rating}
      </Typography>
      <Rating name="read-only" value={rating} readOnly />
    </Box>
  );
}

ShopCardRating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default ShopCardRating;
