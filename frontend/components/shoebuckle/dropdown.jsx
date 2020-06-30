import React, { Component } from 'react';

import { childrenWithProps, parseColor, selectColor } from './util';
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
            inverted
        } = this.props;
        const childProps = { inverted };

        const open = this.props.open === undefined ? stateOpen : this.props.open;

        const className = `shoebuckle dropdown${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

        const onClick = this.props.onClick || this._handleClick;
        
        return (
            <div className={ className }>
                <Dropdown.Trigger 
                    inverted={ inverted }
                    onClick={ onClick } 
                />
                <div 
                    className={ `dropdown-bg ${ open ? "" : " hidden" }` }
                    onClick={ onClick }
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
            children,
            inverted
        } = this.props;
        const childProps = { inverted };

        const className = `dropdown-group${ inverted ? " inverted" : "" }`;

        return (
            <div className={ className }>
                { childrenWithProps(children, childProps) }
            </div>
        );
    }
};

Dropdown.Header = class extends Component {
    render() {
        const {
            children,
            content,
            inverted
        } = this.props;

        const className = `dropdown-header${ inverted ? " inverted" : "" }`;

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
            content,
            horizontal,
            onClick
        } = this.props;
        const childProps = { ...selectColor(this.props) };

        const className = `dropdown-item${ horizontal ? " horizontal" : "" }${ parseColor(this.props) }`;
        
        return (
            <div className={ className } onClick={ onClick }>
                { childrenWithProps(children, childProps) || content }
            </div>
        );
    }
};

Dropdown.Trigger = withWindowDimensions(
    props => {
        const {
            desktop,
            onClick,
            inverted
        } = props;

        const className = `dropdown-trigger`;
        const icon = desktop ? "angle-down" : "ellipsis-h";
        
        return (
            <Icon 
                name={ icon } 
                onClick={ onClick } 
                inverted={ inverted } 
                className={ className } 
                key={ Math.random() } 
            />
        );
    }
);

export default Dropdown;