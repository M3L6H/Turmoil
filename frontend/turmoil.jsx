import React from 'react';
import ReactDOM from "react-dom";

import Root from './components/root';

import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.currentDetails) { 
        const { being, dimensions } = window.currentDetails;
        
        const preloadedState = {
            entities: {
                beings: { [being.id]: being },
                dimensions
            },
            session: { currentBeingId: being.id }
        };
        
        store = configureStore(preloadedState);
        delete window.currentDetails; 
    } else {
        store = configureStore();
    }

    // Set up viewport height and width for mobile
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={ store } />, root);
});
