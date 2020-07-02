import React, { Component } from 'react';

import withWindowDimensions from "../hocs/with_window_dimensions";

import { Button, Icon, Menu, Section, Sidebar } from '../shoebuckle';

import RealmMenu from '../realms';

class DimensionsSidebar extends Component {
    constructor(props) {
        super(props);
    
        this._handleItemClick = this._handleItemClick.bind(this);
    }
    
    _handleItemClick(_, { name }) {
        this.props.select(name);
    }
    
    _renderDimensions() {
        const { dimensions, selected } = this.props;

        return dimensions.map(({ id, name }) => (
            <Menu.Item 
                key={ id } 
                name={ id } 
                active={ selected === id }
                onClick={ this._handleItemClick }
            >
                <Icon.Group huge>
                    <Icon name="circle" black />
                    <Icon 
                        content={ `${ name.split(" ").map((word, idx) => idx === 0 ? word[0].toUpperCase() : word[0].toLowerCase()).slice(0, 2).join("") }` } 
                        primary 
                        transform="shrink-8" 
                    />
                </Icon.Group>
            </Menu.Item>
        ));
    }
    
    render() {
        const {
            desktop,
            open,
            openDimensionModal,
            selected,
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
                    <Menu.Item
                        name="dms"
                        active={ selected === "dms" }
                        onClick={ this._handleItemClick }
                    >
                        <Icon.Group huge>
                            <Icon name="circle" black />
                            <Icon name="comment-alt" primary transform="shrink-8 down-0.8 right-0.3" />
                        </Icon.Group>
                    </Menu.Item>
                    { this._renderDimensions() }
                    <Menu.Item>
                        <Button icon onClick={ openDimensionModal }>
                            <Icon.Group huge>
                                <Icon name="circle" green />
                                <Icon name="plus" transform="shrink-8" />
                            </Icon.Group>
                        </Button>
                    </Menu.Item>
                </Menu>
                <RealmMenu inverted={ inverted } selected={ selected } />
            </Sidebar>
        );
    }
}

export default withWindowDimensions(DimensionsSidebar);