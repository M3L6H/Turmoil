import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import AppHeader from './app_header';
import AppContainer from './app_container';
import ChatWindow from './chat_window';
import DimensionForm from './dimensions';
import Summons from './summonses';

const App = () => (
    <>
        <Switch>
            <Route path="/join" component={ Summons } />
            <Route path="/" render={ () => (
                <AppContainer inverted>
                    <AppHeader />
                    <ChatWindow />
                </AppContainer>
            ) } />
            <Route render={ () => <Redirect to="/" /> } />
        </Switch>
        <DimensionForm inverted />
    </>
);

export default App;