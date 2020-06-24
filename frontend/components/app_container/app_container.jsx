import React, { Component } from 'react'

import withWindowDimensions from '../hocs/with_window_dimensions';

import { Button, Icon, Menu, Section, Sidebar } from '../shoebuckle';

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
            open
        } = this.props;

        return (
            <Sidebar.Pushable className="app-container" fullHeight inverted={ inverted }>
                <Sidebar
                    as={ Section }
                    alwaysOpen={ desktop }
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
                        <Menu.Item>
                            <Button icon>
                                <Icon.Group big>
                                    <Icon name="circle" green />
                                    <Icon name="plus" transform="shrink-8" />
                                </Icon.Group>
                            </Button>
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

export default withWindowDimensions(AppContainer);