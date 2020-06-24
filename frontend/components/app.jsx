import React from 'react';
import { Route } from "react-router-dom";

import AppHeader from './header';
import AppContainer from './app_container';
import DimensionForm from './dimensions';
import Kitchensink from './kitchensink';

const App = () => (
    <>
        <AppContainer inverted>
            <AppHeader />
        </AppContainer>
        <DimensionForm inverted />
        <Route path="/kitchensink" component={ Kitchensink } />
    </>
);

export default App;