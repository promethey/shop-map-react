import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

function AddButton({ onClick, ...rest }) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      {...rest} // eslint-disable-line
    >
      Add
    </Button>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
