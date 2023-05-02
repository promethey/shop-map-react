import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function ShopCardPhone({ phone }) {
  return (
    <Typography variant="p" display="block" mt={2}>
      <strong>Phone:</strong>
      {' '}
      {phone}
    </Typography>
  );
}

ShopCardPhone.propTypes = {
  phone: PropTypes.string.isRequired,
};

export default ShopCardPhone;
