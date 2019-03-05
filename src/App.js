import dotenv from 'dotenv';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import { ToastContainer } from 'react-toastify';
import store from './store';
import Routes from './routes';

import 'react-toastify/dist/ReactToastify.css';

dotenv.config();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        <ToastContainer autoClose={5000} />
      </Provider>
    );
  }
}

export default App;
