import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function ShopCardAddress({ address }) {
  return (
    <Typography variant="p" display="block" mt={2}>
      <strong>Address:</strong>
      {' '}
      {address.street && `st. ${address.street}`}
      {address.city && `, ${address.city}`}
      {address.postCode && `, ${address.postCode}`}
    </Typography>
  );
}

ShopCardAddress.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
    postCode: PropTypes.string,
  }).isRequired,
};

export default ShopCardAddress;
