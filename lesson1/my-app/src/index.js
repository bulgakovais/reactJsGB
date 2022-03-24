import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
// Сброс стилей (типа normolize.css)
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme({
  spacing: 8,
  palette: {
    mode: 'dark',
    background: {
      default: '#424242',
      paper: '#506f54',
    },
    primary: {
      main: '#0b2239',
    },
    secondary: {
      main: '#75c156',
    },
  },
})

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
reportWebVitals();
