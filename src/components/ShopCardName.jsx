import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function ShopCardName({ name }) {
  return (
    <Typography variant="h6" sx={{ fontWeight: '700' }}>
      {name}
    </Typography>
  );
}

ShopCardName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ShopCardName;
