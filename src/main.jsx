// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store.js';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// // const theme = createTheme({
// //   palette: {
// //     mode: 'light',
// //     primary: {
// //       main: '#1976d2',
// //     },
// //     background: {
// //       default: '#f5f7fa',
// //     },
// //   },
// //   typography: {
// //     fontFamily: `'Segoe UI', Roboto, sans-serif`,
// //   },
// // });

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <Provider store={store}>
// //       <ThemeProvider theme={theme}>
// //         <CssBaseline />
// //         <BrowserRouter>
// //           <App />
// //         </BrowserRouter>
// //       </ThemeProvider>
// //     </Provider>
// //   </React.StrictMode>
// // );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// const theme = createTheme({
//   palette: {
//     background: {
//       default: '#f7f8fc',
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//   },
// });

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <App />
//         </ThemeProvider>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);