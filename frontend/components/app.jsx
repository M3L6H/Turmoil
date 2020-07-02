import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import AppHeader from './app_header';
import AppContainer from './app_container/index';
import AppContextMenu from './app_context_menu';
import ChatWindow from './chat_window';
import DimensionForm from './dimensions';
import Splash from './splash';
import Summons from './summonses';

const App = ({ currentBeingId }) => (
    <>
        <Switch>
            <Route path="/join" component={ Summons } />
            { !currentBeingId && <Route path="/new" component={ Splash } /> }
            { currentBeingId &&
                <Route exact path="/" render={ () => (
                    <AppContainer inverted>
                        <AppHeader />
                        <ChatWindow />
                    </AppContainer>
                ) } />
            }
            <Route render={ () => currentBeingId ? <Redirect to="/" /> : <Redirect to="/new" /> } />
        </Switch>
        <DimensionForm inverted />
        <AppContextMenu />
    </>
);

export default App;