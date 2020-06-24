import React from 'react';
import { Route } from "react-router-dom";

import AppHeader from './header';
import AppContainer from './app_container';
import Kitchensink from './kitchensink';

const App = () => (
    <main>
        <AppContainer inverted>
            <AppHeader />
        </AppContainer>
        <Route path="/kitchensink" component={ Kitchensink } />
    </main>
);

export default App;