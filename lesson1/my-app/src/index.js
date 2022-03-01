import React from 'react';
import ReactDOM from 'react-dom';
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
      // paper: '#424242'
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
