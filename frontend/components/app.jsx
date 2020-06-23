import React from 'react';
import { Route } from "react-router-dom";

import Header from './header';
import Kitchensink from './kitchensink';

const App = () => (
    <main>
        <Header />
        <Route path="/kitchensink" component={ Kitchensink } />
    </main>
);

export default App;