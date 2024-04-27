import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';

// Create a custom theme with the desired colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black background
      contrastText: '#00FF00', // Green text
    },
  },
});

const CustomButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log('Button clicked!')}
        sx={{
          fontSize: '16px',
          padding: '10px 16px 10px 16px',
          borderRadius: '12px ',
          border:'1px 0px 0px 0px',
          left:'2rem',
          top:'1rem'

        }}
      >
        Give feedback
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;