import React, { Component } from 'react';

import { Menu } from '../shoebuckle';

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
                    { dimension ? dimension.name : "Direct Messages" }
                </Menu.Item>
            </Menu>
        );
    }
}
