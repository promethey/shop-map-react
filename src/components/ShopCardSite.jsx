import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function ShopCardSite({ site }) {
  return (
    <Typography variant="p" display="block" mt={2}>
      <strong>Site:</strong>
      {' '}
      <a href={`https://${site}`} target="_blank" rel="noreferrer">
        {site}
      </a>
    </Typography>
  );
}

ShopCardSite.propTypes = {
  site: PropTypes.string.isRequired,
};

export default ShopCardSite;
