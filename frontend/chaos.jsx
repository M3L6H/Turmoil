import React from 'react';
import ReactDOM from "react-dom";

import Root from './components/root';

import configureStore from './store/store';

// TODO: Remove after development!!
import { fetchBeings } from './actions/beings_actions';
import { fetchDimension } from './actions/dimensions_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.currentBeing) {
        const preloadedState = {
            entities: {
                beings: { [window.currentBeing.id]: window.currentBeing }
            },
            session: { currentBeingId: window.currentBeing.id }
        };

        store = configureStore(preloadedState);
        delete window.currentBeing;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={ store } />, root);

    // TODO: Remove after development!!
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBeings = fetchBeings;
    window.fetchDimension = fetchDimension;
});