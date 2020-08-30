import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import AppContainer from './app_container/index';
import AppContextMenu from './app_context_menu';
import Content from './content';
import DimensionForm from './dimensions';
import Header from './header';
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
                        <Header />
                        <Content />
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