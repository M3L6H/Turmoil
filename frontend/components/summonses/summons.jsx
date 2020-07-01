import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Summons extends Component {
    constructor(props) {
        super(props);
        
        this._join = this._join.bind(this);
    }

    _join() {
        this.props.join(this.props.dimension)
            .then(() => this.props.history.push("/"));
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { currentBeingId, dimension } = this.props;

        if (currentBeingId && !dimension) {
            const search = this.props.location.search;
            const params = new URLSearchParams(search);
            this.props.loadSummons(params.get("url"));
        }
    }
    
    _renderMessage() {
        const { openSignIn, openSignUp, inverted } = this.props;

        return (
            <div className={ `summons-message${ inverted ? " inverted" : "" }` }>
                You need to be <a onClick={ openSignIn }>signed in</a> or <a onClick={ openSignUp }>sign up</a> to join a dimension.
            </div>  
        );
    }

    _renderSummons() {
        const { dimension, inverted } = this.props;

        let content = "Loading...";
        
        if (dimension) {
            content = <>
                <div className="notice">You have joined { dimension.name }.</div>
                <a onClick={ this._join }>Click here to continue.</a>
            </>;
        }
        
        return (
            <div className={ `summons${ inverted ? " inverted" : "" }`}>
                { content }
            </div>
        );
    }
    
    render() {
        const { currentBeingId } = this.props;

        return currentBeingId ? this._renderSummons() : this._renderMessage();
    }
}

export default withRouter(Summons);