import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ShopCard({
  shop: {
    name, rating, description, address, contacts, images,
  },
}) {
  return (
    <Box p={2} pb={3} sx={{ border: '1px solid #bdc3c7', borderRadius: '7px' }}>
      <Typography variant="h6" sx={{ fontWeight: '700' }}>
        {name}
      </Typography>
      <Box mb={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="p" sx={{ marginRight: '5px', color: 'gray' }}>
          {rating}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
      </Box>
      {description && (
        <Typography variant="p" display="block" mb={2} sx={{ color: 'gray' }}>
          {description}
        </Typography>
      )}
      {address && (
        <Typography variant="p" display="block" mt={2}>
          <strong>Address:</strong>
          {' '}
          {address.street && `st. ${address.street}`}
          {address.city && `, ${address.city}`}
          {address.postCode && `, ${address.postCode}`}
        </Typography>
      )}
      {contacts.phone && (
        <Typography variant="p" display="block" mt={2}>
          <strong>Phone:</strong>
          {' '}
          {contacts.phone}
        </Typography>
      )}
      {contacts?.site && (
        <Typography variant="p" display="block" mt={2}>
          <strong>Site:</strong>
          {' '}
          <a href={`https://${contacts.site}`}>{contacts.site}</a>
        </Typography>
      )}
      {images && (
        <ImageList sx={{ height: 500 }} cols={1}>
          {images.map((img) => (
            <ImageListItem key={img.src}>
              <img
                src={`${img.src}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${img.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={img.alt}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}

ShopCard.propTypes = {
  shop: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
      postCode: PropTypes.string,
    }),
    contacts: PropTypes.shape({
      phone: PropTypes.string,
      site: PropTypes.string,
    }),
    images: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default ShopCard;
