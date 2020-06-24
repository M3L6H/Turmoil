import React from 'react';
import { Route } from "react-router-dom";

import { Section, Sidebar } from './shoebuckle';

import AppHeader from './header';
import Kitchensink from './kitchensink';

const App = () => (
    <main>
        <Sidebar.Pushable>
            <Sidebar
                as={ Section }
                horizontal
            >
                Test
            </Sidebar>
            <Sidebar.Pusher>
                <AppHeader />
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Route path="/kitchensink" component={ Kitchensink } />
    </main>
);

export default App;