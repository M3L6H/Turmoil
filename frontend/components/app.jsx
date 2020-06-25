import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import AppHeader from './app_header';
import AppContainer from './app_container';
import DimensionForm from './dimensions';
import Kitchensink from './kitchensink';

const App = () => (
    <>
        <AppContainer inverted>
            <AppHeader />
        </AppContainer>
        <DimensionForm inverted />
        <Switch>
            <Route path="/kitchensink" component={ Kitchensink } />
            <Route render={ () => <Redirect to="/" /> } />
        </Switch>
    </>
);

export default App;