import React from 'react';
import ReactDOM from "react-dom";

import Root from './components/root';

import configureStore from './store/store';

// TODO: Remove after development!!
import { fetchBeings } from './actions/beings_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<Root store={ store } />, root);

    // TODO: Remove after development!!
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBeings = fetchBeings;
});