import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { children, onSubmit } = this.props;
        
        return (
            <form onSubmit={ onSubmit }>
                { children }
            </form>
        );
    }
}

