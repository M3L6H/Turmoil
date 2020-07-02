import React, { Component } from 'react';

import { childrenWithProps } from './util';

import Icon from './icon';
import Label from './label';
import Message from './message';

export default class Form extends Component {
    render() {
        const { children, errors, inverted, onSubmit } = this.props;
        const childProps = { inverted };

        const className = `shoebuckle form${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

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
            data-value={ props["data-value"] }
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

        const className = `form-checkbox${ error ? " error" : "" }${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

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

Form.RadioGroup = class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateSelected: props.selected || ""
        };

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(e) {
        const input = e.currentTarget;

        this.setState({ stateSelected: input.value });
    }

    render() {
        const { stateSelected } = this.state;

        const {
            options,
            error,
            inverted,
            label,
            required,
            name
        } = this.props;

        const className = `form-radio-group${ error ? " error" : "" }${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

        const selected = this.props.selected === undefined ? stateSelected : this.props.selected;
        const onChange = this.props.onChange === undefined ? this._handleChange : this.props.onChange;

        const inputs = options.map(({ value, label }, idx) => (
            <div 
                className={ `radio-field${ inverted ? " inverted" : "" }` }
                key={ idx }
            >
                <input
                    className="form-radio"
                    type="radio"
                    checked={ value === selected }
                    value={ value }
                    name={ name }
                    onChange={ onChange }
                    data-type={ this.props["data-type"] }
                />
                <Form.Label
                    onClick={ onChange }
                    data-value={ value }
                    data-type={ this.props["data-type"] }
                >
                    { label }
                </Form.Label>
            </div>
        ));

        if (label) {
            return (
                <Form.Field
                    error={ error }
                    inverted={ inverted }
                    className={ className }
                >
                    <Form.Label 
                        content={ label } 
                        required={ required }
                    />
                    { inputs } 
                </Form.Field>
            );
        } else {
            return inputs;
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
            button,
            error,
            label,
            inverted,
            name,
            onChange,
            placeholder,
            readOnly,
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
            readOnly={ readOnly }
            type={ type || "text" }
            value={ value === undefined ? stateValue : value }
            data-type={ this.props["data-type"] }
        />;

        if (label) {
            return (
                <Form.Field error={ error } inverted={ inverted }>
                    <Form.Label content={ label } required={ required } />
                    { input }
                    { button }
                </Form.Field>
            );
        } else {
            return input;
        }

    }
};

Form.Textarea = class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateValue: props.value || ""
        };

        this._autoExpand = this._autoExpand.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    _autoExpand(e) {
        console.log("called");
        if (!this.props.growing) return;
        const textarea = e.currentTarget;

        textarea.style.height = "inherit";
        const computed = window.getComputedStyle(textarea);
        const height = parseInt(computed.getPropertyValue("border-top-width"), 10) +
            parseInt(computed.getPropertyValue("padding-top"), 10) + 
            textarea.scrollHeight +
            parseInt(computed.getPropertyValue("padding-bottom"), 10) + 
            parseInt(computed.getPropertyValue("border-bottom-width"), 10);

        textarea.style.height = height + "px";
    }

    _handleChange(e) {
        this.setState({ stateValue: e.currentTarget.value });
    }
    
    render() {
        const { stateValue } = this.state;
        
        const { 
            button,
            error,
            growing,
            label,
            inverted,
            name,
            onChange,
            placeholder,
            readOnly,
            required,
            value
        } = this.props;

        const className = `shoebuckle form-textarea${ error ? " error" : "" }${ growing ? " growing" : "" }${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

        const textarea = <textarea 
            className={ className }
            name={ name }
            onChange={ onChange || this._handleChange }
            placeholder={ placeholder }
            readOnly={ readOnly }
            data-type={ this.props["data-type"] }
            value={ value === undefined ? stateValue : value }
            onInput={ this._autoExpand }
        ></textarea>;

        if (label) {
            return (
                <Form.Field error={ error } inverted={ inverted }>
                    <Form.Label content={ label } required={ required } />
                    { textarea }
                    { button }
                </Form.Field>
            );
        } else {
            return textarea;
        }

    }
};

Form.Note = (props) => {
    const {
        children,
        content,
        inverted
    } = props;

    const className = `shoebuckle form-note${ inverted ? " inverted" : "" }`;

    return (
        <div className={ className }>
            { children || content }
        </div>
    );
};

Form.Select = class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateSelected: props.selected || "",
            stateOpen: props.open || false
        };

        this._handleChange = this._handleChange.bind(this);
        this._handleOpen = this._handleOpen.bind(this);
        this._close = this._close.bind(this);
    }

    _close() {
        this.setState({ stateOpen: false });
    }

    _handleChange(e) {
        e.stopPropagation();
        const option = e.currentTarget;

        if (this.props.onChange) {
            this.props.onChange(e);
        } else {
            this.setState({ stateSelected: option.value });
        }

        this._close();
    }

    _handleOpen(e) {
        e.stopPropagation();
        this.setState({ stateOpen: true });
    }

    render() {
        const { stateSelected, stateOpen } = this.state;

        const {
            error,
            inverted,
            label,
            required,
            placeholder
        } = this.props;

        const className = `form-select${ error ? " error" : "" }${ inverted ? " inverted" : "" }${ this.props.className ? " " + this.props.className : "" }`;

        const selected = this.props.selected === undefined ? stateSelected : this.props.selected;

        const open = this.props.open === undefined ? stateOpen : this.props.open;
        const onClick = this.props.onClick === undefined ? this._handleOpen : this.props.onClick;

        const options = {};

        this.props.options.forEach(({ value, label }, idx) => {
            options[value] = <div 
                key={ idx }
                className={ `select-option${ inverted ? " inverted" : "" }${ value === selected ? " selected" : "" }` }
            >
                <input 
                    readOnly
                    value={ value }
                    onClick={ this._handleChange }
                    data-type={ this.props["data-type"] }
                />

                <span>{ label }</span>
            </div>;
        });

        const select = <div className={ className }>
            <div 
                className={ `selected${ open ? " open" : ""}` }
                onClick={ onClick }
            >
                { options[selected] || placeholder }
                <Icon name="angle-down" />
            </div>
            { open && <div className="bg" onClick={ this._close }></div> }
            <div className={ `select-options${ open ? " open" : ""}` }>
                { Object.values(options) }
            </div>
        </div>

        if (label) {
            return (
                <Form.Field
                    error={ error }
                    inverted={ inverted }
                >
                    <Form.Label 
                        content={ label } 
                        required={ required }
                    />
                    { select }
                </Form.Field>
            );
        } else {
            return select;
        }
    }
};