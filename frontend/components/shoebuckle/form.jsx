import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { children, onSubmit } = this.props;

        const className = `shoebuckle form`;
        
        return (
            <form onSubmit={ onSubmit } className={ className }>
                { children }
            </form>
        );
    }
}

Form.Field = class extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { children } = this.props;

        const className = `shoebuckle form-field`;

        return (
            <div className={ className }>
                { children }
            </div>
        );
    }
};

Form.Label = (props) => {
    const {
        children,
        content
    } = props;

    const className = `shoebuckle form-label`;
    
    return (
        <label className={ className }>
            { children || content }
        </label>
    );
};

Form.Input = class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null
        };

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e) {
        this.setState({ value: e.currentTarget.value });
    }
    
    render() {
        const { value } = this.state;
        
        const { 
            name,
            onChange,
            placeholder,
            type 
        } = this.props;

        const className = `shoebuckle form-input ${ type || "text" }-input`;

        return (
            <input 
                className={ className }
                name={ name }
                onChange={ onChange || this._handleChange }
                placehoder={ placeholder }
                type={ type }
                value={ value }
            />
        );
    }
};
