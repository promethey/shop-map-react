import React from 'react';
import image from '../img/logo-192x192.png';

function LogoImage() {
  return (
    <img src={image} alt="Logo" style={{ width: '24px' }} />
  );
}

export default LogoImage;
