import React, { Component } from "react";

import debounce from '../../util/debouncer_util';
import { BREAKPOINT } from '../../util/constants';

export default (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = { windowWidth: 0, windowHeight: 0, desktop: false };
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
            this.setState({ 
                windowWidth: window.innerWidth, 
                windowHeight: window.innerHeight,
                desktop: window.innerWidth > BREAKPOINT
            });
        }

        render() {
            return <WrappedComponent { ...this.state } { ...this.props } />;
        }
    };
}