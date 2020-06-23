import React from 'react';
import { Route } from "react-router-dom";

import Kitchensink from './kitchensink';

const App = () => (
    <main>
        <Route path="/kitchensink" component={ Kitchensink } />
    </main>
);

export default App;