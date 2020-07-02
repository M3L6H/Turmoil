import React, { Component } from 'react';

import { ContextMenu } from '../shoebuckle';

export default class AppContextMenu extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            items: []
        };

        this._handleContextMenu = this._handleContextMenu.bind(this);
    }

    _handleContextMenu(_, target) {
        this.setState({ items: this.props.contexts[target.dataset.context ]});
    }
    
    render() {
        const { items } = this.state;

        return (
            <ContextMenu
                items={ items }
                onContextMenu={ this._handleContextMenu }
            />
        );
    }
}
