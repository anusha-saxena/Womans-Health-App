import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FFB6C1', // Soft pastel pink for primary actions
    },
    secondary: {
      main: '#FF82AB', // Mellow pink for secondary actions
    },
    background: {
      default: '#FFF0F6', // Light pink background color for the whole app
      paper: '#FCE4EC',   // Lighter pink for paper elements like cards or boxes
    },
    text: {
      primary: '#3C3C3C',    // Darker text for readability
      secondary: '#FF1493',  // Soft deep pink for secondary text
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`, // Soft, feminine font
    h1: {
      fontFamily: `'Dancing Script', cursive`, 
      color: '#FF1493',
    },
    h2: {
      fontFamily: `'Dancing Script', cursive`, 
      color: '#FF1493',
    },
    h3: {
      fontFamily: `'Poppins', sans-serif`,
      color: '#FF1493',
    },
    button: {
      textTransform: 'none', // Normal button text, no uppercase
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '8px 24px',
          fontWeight: 'bold',
          background: '#FFB6C1', // Soft pastel pink
          '&:hover': {
            background: '#FF82AB', // Mellow pink hover effect
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#FF1493',
          },
          '& .MuiInputBase-root': {
            borderRadius: '30px',
            backgroundColor: '#fff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FF1493',
            },
            '&:hover fieldset': {
              borderColor: '#FF82AB',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#FFB6C1',
        },
      },
    },
  },
});

export default customTheme;
