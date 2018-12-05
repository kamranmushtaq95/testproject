import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Store from "./Redux/Store";
import App from './App';

const wrapper = document.getElementById("root");

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>,
    wrapper);



