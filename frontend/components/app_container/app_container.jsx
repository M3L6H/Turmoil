import React, { Component } from 'react'

import { Icon, Menu, Section, Sidebar } from '../shoebuckle';

export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    
        this._handleClick = this._handleClick.bind(this);
    }
    
    _handleClick() {
        console.log("called");
        this.props.closeSidebar();
    }
    
    render() {
        const {
            children,
            open
        } = this.props;
        
        return (
            <Sidebar.Pushable className="app-container" fullHeight>
                <Sidebar
                    as={ Section }
                    horizontal
                    push
                    visible={ open }
                >
                    <Menu
                        center
                        secondary
                        stretch
                        vertical
                    >
                        <Menu.Item>
                            <Icon.Group big>
                                <Icon name="circle" black />
                                <Icon name="comment-alt" primary transform="shrink-8 down-0.8 right-0.3" />
                            </Icon.Group>
                        </Menu.Item>
                    </Menu>
                    <Menu
                        fluid
                        stretch
                        vertical
                    >
                        <Menu.Item>
                            Direct messages
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
