import React, { Component } from 'react';

import { childrenWithProps } from './util';

import Label from './label';
import Message from './message';

export default class Form extends Component {
    render() {
        const { children, errors, inverted, onSubmit } = this.props;
        const childProps = { inverted };

        const className = `shoebuckle form${ this.props.className ? " " + this.props.className : "" }`;

        return (
            <form onSubmit={ onSubmit } className={ className }>
                { childrenWithProps(children, childProps) }
                <Message 
                    header="Errors"
                    list={ errors }
                    visible={ Boolean(errors) && errors.length > 0 }
                    error
                />
            </form>
        );
    }
}

Form.Field = (props) => {
    const { 
        children,
        error,
        inverted
    } = props;

    const className = `shoebuckle form-field${ props.className ? " " + props.className : "" }`;
    const childProps = { error, inverted };

    // React doesn't like a boolean for error when cloning the component
    childProps.inverted = childProps.inverted === true ? 1 : childProps.inverted;
    childProps.error = childProps.error === true ? 1 : childProps.error;

    const { content, pointing } = error || {};

    return (
        <div className={ className }>
            { content && (!pointing || pointing === "below" || pointing === "right") && (
                <Label error pointing={ pointing } content={ content } floating/>
            ) }
            { childrenWithProps(children, childProps) }
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
        inverted,
        onClick,
        required
    } = props;

    const className = `shoebuckle form-label${ error ? " error" : "" }${ inverted ? " inverted" : "" }${ required ? " required" : "" }${ props.className ? " " + props.className : "" }`;
    
    return (
        <label 
            className={ className } 
            onClick={ onClick }
            data-type={ props["data-type"] }
        >
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
            inverted,
            onChange,
            required
        } = this.props;

        const className = `shoebuckle form-checkbox${ error ? " error" : "" }${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

        const checkbox = <input
            checked={ checked === undefined ? stateChecked : checked }
            className={ className }
            onChange={ onChange || this._handleChange }
            type="checkbox"
            data-type={ this.props["data-type"] }
        />;
        
        if (label) {
            return (
                <Form.Field error={ error } inverted={ inverted }>
                    { checkbox }
                    <Form.Label 
                        content={ label } 
                        onClick={ onChange || this._handleChange } 
                        required={ required }
                        data-type={ this.props["data-type"] }
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
            inverted,
            name,
            onChange,
            placeholder,
            required,
            type,
            value
        } = this.props;

        const className = `shoebuckle form-input ${ type || "text" }-input${ error ? " error" : "" }${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

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
                <Form.Field error={ error } inverted={ inverted }>
                    <Form.Label content={ label } required={ required } />
                    { input }
                </Form.Field>
            );
        } else {
            return input;
        }

    }
};
