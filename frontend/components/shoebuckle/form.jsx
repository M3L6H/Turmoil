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

Form.Field = (props) => {
    const { children } = props;

    const className = `shoebuckle form-field`;

    return (
        <div className={ className }>
            { children }
        </div>
    );
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

Form.Checkbox = class extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            stateChecked: props.checked || false
        };

        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(e) {
        this.setState({ stateChecked: e.currentTarget.checked });
    }
    
    render() {
        const { stateChecked } = this.state;

        const {
            checked,
            label,
            onClick
        } = this.props;

        const className = `shoebuckle form-checkbox`;

        const checkbox = <input
            checked={ checked === undefined ? stateChecked : checked }
            className={ className }
            onClick={ onClick || this._handleClick }
            type="checkbox"
        />;
        
        if (label) {
            return (
                <Form.Field>
                    { checkbox }
                    <Form.Label content={ label } />
                </Form.Field>
            );
        } else {
            return checkbox;
        }
    }
};

Form.Input = class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateValue: props.value || ""
        };

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e) {
        this.setState({ stateValue: e.currentTarget.value });
    }
    
    render() {
        const { stateValue } = this.state;
        
        const { 
            label,
            name,
            onChange,
            placeholder,
            type,
            value
        } = this.props;

        const className = `shoebuckle form-input ${ type || "text" }-input`;

        const input = <input 
            className={ className }
            name={ name }
            onChange={ onChange || this._handleChange }
            placeholder={ placeholder }
            type={ type }
            value={ value === undefined ? stateValue : value }
        />;

        if (label) {
            return (
                <Form.Field>
                    <Form.Input content={ label } />
                    { input }
                </Form.Field>
            );
        } else {
            return input;
        }

    }
};
