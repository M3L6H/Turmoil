import React from 'react';
import ReactDOM from "react-dom";
import actionCable from 'actioncable';

import Root from './components/root';

import configureStore from './store/store';
import { receiveCable } from './actions/cable_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentDetails) { 
    const {
      being,
      beings,
      dimensions,
      comrades,
      comradeBeings,
      conversations
    } = window.currentDetails;
    
    const preloadedState = {
      entities: {
        beings,
        dimensions,
        comrades: comrades || {},
        comradeBeings: comradeBeings || {},
        conversations: conversations || {}
      },
      session: { currentBeingId: being.id }
    };
    
    store = configureStore(preloadedState);
    delete window.currentDetails; 
  } else {
    store = configureStore();
  }

  // Set up action cable
  const cable = actionCable.createConsumer(`ws://${ window.location.host }/cable`);
  store.dispatch(receiveCable(cable));

  // Set up viewport height and width for mobile
  const vh = window.innerHeight * 0.01;
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});
