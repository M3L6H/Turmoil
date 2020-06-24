import React, { Component } from "react";

import debounce from '../../util/debouncer_util';

export default (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = { windowWidth: 0, windowHeight: 0 };
            this.updateWindowDimensions = debounce(this.updateWindowDimensions.bind(this));
        }

        componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener("resize", this.updateWindowDimensions);
        }

        componentWillUnmount() {
            window.removeEventListener("resize", this.updateWindowDimensions);
        }
        
        updateWindowDimensions() {
            this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
        }

        render() {
            return <WrappedComponent { ...this.state } { ...this.props } />;
        }
    };
}