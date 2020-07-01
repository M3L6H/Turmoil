import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import AppHeader from './app_header';
import AppContainer from './app_container';
import ChatWindow from './chat_window';
import DimensionForm from './dimensions';
import Summons from './summonses';

const App = () => (
    <>
        <AppContainer inverted>
            <AppHeader />
            <Switch>
                <Route path="/join" component={ Summons } />
                <Route path="/" component={ ChatWindow } />
                <Route render={ () => <Redirect to="/" /> } />
            </Switch>
        </AppContainer>
        <DimensionForm inverted />
    </>
);

export default App;