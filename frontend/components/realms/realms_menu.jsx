import React, { Component } from 'react';

import { Menu } from '../shoebuckle';

export default class RealmsMenu extends Component {
    render() {
        const { inverted } = this.props;
        
        return (
            <Menu
                fluid
                inverted={ inverted }
                stretch
                vertical
            >
                <Menu.Item>
                    Direct messages
                </Menu.Item>
            </Menu>
        );
    }
}
