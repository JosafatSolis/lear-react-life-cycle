import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import UIkit from 'uikit';
import "uikit/dist/js/uikit-icons";

// UIkit.use(Icons)

const WithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    {WithRouter()}
  </React.StrictMode>,
  document.getElementById('root')
);

// Para quitar los warnings:
// https://medium.com/fixtergeek/customize-eslint-rules-in-create-react-app-a82c45ed5f24

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
