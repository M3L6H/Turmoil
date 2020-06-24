import React, { Component } from 'react'

import { Section, Sidebar } from '../shoebuckle';

export default class AppContainer extends Component {
    render() {
        const {
            children
        } = this.props;
        
        return (
            <Sidebar.Pushable>
                <Sidebar
                    as={ Section }
                    horizontal
                >
                    
                </Sidebar>
                <Sidebar.Pusher>
                    { children }
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}
