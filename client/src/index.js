import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@atlaskit/css-reset';
import './index.css';
import {Store} from "./Redux/Store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);