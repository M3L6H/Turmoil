import React, { Component } from 'react';

import { Header, Menu } from '../shoebuckle';

export default class RealmsMenu extends Component {
    render() {
        const { 
            dimension,
            inverted
        } = this.props;
        
        return (
            <Menu
                fluid
                inverted={ inverted }
                stretch
                vertical
            >
                <Menu.Item>
                    <Header>
                        { dimension ? dimension.name : "Direct Messages" }
                    </Header>
                </Menu.Item>
            </Menu>
        );
    }
}
