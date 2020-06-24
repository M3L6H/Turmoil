import React, { Component } from 'react'

import { Icon, Menu, Section, Sidebar } from '../shoebuckle';

export default class AppContainer extends Component {
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
            open
        } = this.props;
        
        return (
            <Sidebar.Pushable className="app-container">
                <Sidebar
                    as={ Section }
                    horizontal
                    visible={ open }
                >
                    <Menu
                        vertical
                    >
                        <Menu.Item>
                            <Icon name="comment-alt" />
                        </Menu.Item>
                    </Menu>
                </Sidebar>
                <Sidebar.Pusher onClick={ open ? this._handleClick : undefined }>
                    { children }
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}
