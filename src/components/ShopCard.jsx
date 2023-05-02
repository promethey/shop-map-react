import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ShopCardName from './ShopCardName';
import ShopCardRating from './ShopCardRating';
import ShopCardDescription from './ShopCardDescription';
import ShopCardAddress from './ShopCardAddress';
import ShopCardPhone from './ShopCardPhone';
import ShopCardSite from './ShopCardSite';

function ShopCard({
  shop: {
    name, rating, description, address, contacts, images,
  },
}) {
  return (
    <Box p={2} pb={3} sx={{ border: '1px solid #bdc3c7', borderRadius: '7px' }}>
      <ShopCardName name={name} />
      <ShopCardRating rating={rating} />
      {description && (
        <ShopCardDescription description={description} />
      )}
      {address && (
        <ShopCardAddress address={address} />
      )}
      {contacts.phone && (
        <ShopCardPhone phone={contacts.phone} />
      )}
      {contacts.site && (
        <ShopCardSite site={contacts.site} />
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
