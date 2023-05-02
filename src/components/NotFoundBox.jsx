import React from 'react';
import Box from '@mui/material/Box';

function NotFoundBox() {
  return (
    <Box p={3} sx={{ borderRadius: '7px', bgcolor: '#ecf0f1', color: '#7f8c8d' }}>
      Oops, nothing found!
    </Box>
  );
}

export default NotFoundBox;
