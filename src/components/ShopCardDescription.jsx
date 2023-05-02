import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function ShopCardDescription({ description }) {
  return (
    <Typography variant="p" display="block" mb={2} sx={{ color: 'gray' }}>
      {description}
    </Typography>
  );
}

ShopCardDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ShopCardDescription;
