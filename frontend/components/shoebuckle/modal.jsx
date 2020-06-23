import React, { Component } from 'react';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            stateOpen: props.open === undefined ? false : props.open
        };
    }
    
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
