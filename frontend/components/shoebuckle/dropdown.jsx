import React, { Component } from 'react';

import withWindowDimensions from '../hocs/with_window_dimensions';

import Icon from './icon';

class Dropdown extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            stateOpen: false
        };

        this._handleClick = this._handleClick.bind(this); 
    }

    _handleClick() {
        this.setState({ stateOpen: !this.state.stateOpen });
    }
    
    render() {
        const {
            stateOpen
        } = this.state;
        
        const {
            children,
            onClick
        } = this.props;

        const open = this.props.open === undefined ? stateOpen : this.props.open;

        const className = `shoebuckle dropdown${ this.props.className ? " " + this.props.className : "" }`;
        
        return (
            <div className={ className }>
                <Dropdown.Trigger 
                    onClick={ onClick || this._handleClick } 
                />
                { open && (
                    <Dropdown.Content>
                        { children }         
                    </Dropdown.Content>
                ) }
            </div>
        );
    }
}

Dropdown.Content = props => {
    const {
        children
    } = props;

    const className = `dropdown-content`;
    
    return (
        <div className={ className }>
            { children }
        </div>
    );
};

Dropdown.Group = class extends Component {
    render() {
        const {
            children
        } = this.props;

        const className = `dropdown-group`;

        return (
            <div className={ className }>
                { children }
            </div>
        );
    }
};

Dropdown.Header = class extends Component {
    render() {
        const {
            children,
            content
        } = this.props;

        const className = `dropdown-header`;

        return (
            <div className={ className }>
                { children || content }
            </div>
        );
    }
};

Dropdown.Item = class extends Component {
    render() {
        const {
            children,
            content
        } = this.props;

        const className = `dropdown-item`;
        
        return (
            <div className={ className }>
                { children || content }
            </div>
        );
    }
};

Dropdown.Trigger = withWindowDimensions(
    props => {
        const {
            desktop,
            onClick
        } = props;

        const className = `dropdown-trigger`;
        const icon = desktop ? "angle-down" : "ellipsis-h";
        
        return (
            <Icon name={ icon } onClick={ onClick } className={ className } key={ Math.random() } />
        );
    }
);

export default Dropdown;