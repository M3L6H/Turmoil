import React, { Component, Children, isValidElement, cloneElement } from 'react';

import Label from './label';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, errors, onSubmit } = this.props;

        const className = `shoebuckle form`;
        
        return (
            <form onSubmit={ onSubmit } className={ className }>
                { children }
                { errors }
            </form>
        );
    }
}

Form.Field = (props) => {
    const { 
        children,
        error
    } = props;

    const className = `shoebuckle form-field`;
    const childProps = { error };

    // React doesn't like a boolean for error when cloning the component
    childProps.error = childProps.error === true ? 1 : childProps.error;

    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, { ...childProps, ...child.props });
        }

        return child;
    });

    const { content, pointing } = error || {};

    return (
        <div className={ className }>
            { content && (!pointing || pointing === "below" || pointing === "right") && (
                <Label error pointing={ pointing } content={ content } floating/>
            ) }
            { childrenWithProps }
            { content && (!pointing || pointing === "above" || pointing === "left") && (
                <Label error pointing={ pointing } content={ content }/>
            ) }
        </div>
    );
};

Form.Label = (props) => {
    const {
        children,
        content,
        error,
        onClick,
        required
    } = props;

    const className = `shoebuckle form-label${ error ? " error" : "" }${ required ? " required" : "" }`;
    
    return (
        <label className={ className } onClick={ onClick }>
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

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange() {
        this.setState({ stateChecked: !this.state.stateChecked });
    }
    
    render() {
        const { stateChecked } = this.state;

        const {
            checked,
            error,
            label,
            onChange,
            required
        } = this.props;

        const className = `shoebuckle form-checkbox${ error ? " error" : "" }`;

        const checkbox = <input
            checked={ checked === undefined ? stateChecked : checked }
            className={ className }
            onChange={ onChange || this._handleChange }
            type="checkbox"
        />;
        
        if (label) {
            return (
                <Form.Field error={ error }>
                    { checkbox }
                    <Form.Label 
                        content={ label } 
                        onClick={ onChange || this._handleChange } 
                        required={ required }
                    />
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
            error,
            label,
            name,
            onChange,
            placeholder,
            required,
            type,
            value
        } = this.props;

        const className = `shoebuckle form-input ${ type || "text" }-input${ error ? " error" : "" }`;

        const input = <input 
            className={ className }
            name={ name }
            onChange={ onChange || this._handleChange }
            placeholder={ placeholder }
            type={ type || "text" }
            value={ value === undefined ? stateValue : value }
            data-type={ this.props["data-type"] }
        />;

        if (label) {
            return (
                <Form.Field error={ error }>
                    <Form.Label content={ label } required={ required } />
                    { input }
                </Form.Field>
            );
        } else {
            return input;
        }

    }
};
