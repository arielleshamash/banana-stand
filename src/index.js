import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Homepage from './Components/Homepage';
import DAOpage from './Components/DAO';
import theme from './theme';
import Home from './testPage/Home'; 

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Home />
    {/* <Homepage /> */}
    {/* <DAOpage /> */}
  </ThemeProvider>,
  document.getElementById('root'),
);

