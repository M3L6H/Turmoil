import React, { Component } from 'react';

import { childrenWithProps } from './util';
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
            inverted,
            onClick
        } = this.props;
        const childProps = { inverted };

        const open = this.props.open === undefined ? stateOpen : this.props.open;

        const className = `shoebuckle dropdown${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;
        
        return (
            <div className={ className }>
                <Dropdown.Trigger 
                    inverted={ inverted }
                    onClick={ onClick || this._handleClick } 
                />
                <div 
                    className={ `dropdown-bg ${ open ? "" : " hidden" }` }
                    onClick={ this._handleClick }
                ></div>
                <Dropdown.Content inverted={ inverted } open={ open }>
                    { childrenWithProps(children, childProps) }         
                </Dropdown.Content>
            </div>
        );
    }
}

Dropdown.Content = props => {
    const {
        children,
        inverted,
        open
    } = props;

    const className = `dropdown-content${ inverted ? " inverted" : "" }${ open ? "" : " hidden" }`;
    
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