import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import AppHeader from './app_header';
import AppContainer from './app_container';
import ChatWindow from './chat_window';
import DimensionForm from './dimensions';

const App = () => (
    <>
        <AppContainer inverted>
            <AppHeader />
            <ChatWindow />
        </AppContainer>
        <DimensionForm inverted />
        {/* <Switch>
            <Route render={ () => <Redirect to="/" /> } />
        </Switch> */}
    </>
);

export default App;