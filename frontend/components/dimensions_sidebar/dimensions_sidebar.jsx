import React, { Component } from 'react';

import { Button, Icon, Menu, Section, Sidebar } from '../shoebuckle';

export default class DimensionsSidebar extends Component {
    render() {
        const {
            desktop,
            open,
            openDimensionModal,
            signedIn,
            inverted
        } = this.props;

        return (
            <Sidebar
                as={ Section }
                alwaysOpen={ desktop && signedIn }
                horizontal
                inverted={ inverted }
                push
                visible={ open && signedIn }
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
                        <Button icon onClick={ openDimensionModal }>
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
        );
    }
}
