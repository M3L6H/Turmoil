import React, { Component } from 'react'

import withWindowDimensions from '../hocs/with_window_dimensions';

import { Sidebar } from '../shoebuckle';

import DimensionsSidebar from './dimensions_sidebar';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    
        this._handleClick = this._handleClick.bind(this);
    }
    
    _handleClick() {
        this.props.closeSidebar();
    }
    
    render() {
        const {
            children,
            desktop,
            inverted,
            open,
            openDimensionModal,
            signedIn
        } = this.props;

        return (
            <Sidebar.Pushable className="app-container" fullHeight inverted={ inverted }>
                <DimensionsSidebar
                    desktop={ desktop }
                    open={ open }
                    openDimensionModal={ openDimensionModal }
                    signedIn={ signedIn }
                />
                <Sidebar.Pusher onClick={ open ? this._handleClick : undefined }>
                    { children }
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default withWindowDimensions(AppContainer);