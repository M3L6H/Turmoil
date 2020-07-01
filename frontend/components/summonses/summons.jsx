import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

import AppHeader from '../app_header';

class Summons extends Component {
    constructor(props) {
        super(props);
        
        this._join = this._join.bind(this);
    }

    _join() {
        this.props.join(this.props.dimension)
            .then(() => this.props.history.push("/"));
    }

    _loadSummons() {
        const { currentBeingId, dimension, errors } = this.props;

        if (currentBeingId && !dimension && errors.length === 0) {
            const search = this.props.location.search;
            const params = new URLSearchParams(search);
            this.props.loadSummons(params.get("url"));
        }
    }
    
    componentDidMount() {
        this._loadSummons();
    }
    
    componentDidUpdate(prevProps, prevState) {
        this._loadSummons();
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
        const { dimension, inverted, errors } = this.props;

        let content = "Loading...";
        
        if (dimension) {
            content = <>
                <div className="notice">You have joined { dimension.name }.</div>
                <a onClick={ this._join }>Click here to continue.</a>
            </>;
        } else if (errors) {
            content = <div className="errors">
                { errors.map((error, idx) => (
                    <div className="error" key={ idx }>{ error }</div>
                )) }
                <Link to="/">Click here to continue.</Link>
            </div>;
        }
        
        return (
            <div className={ `summons${ inverted ? " inverted" : "" }`}>
                { content }
            </div>
        );
    }
    
    render() {
        const { currentBeingId } = this.props;

        return <>
            <AppHeader simple />
            { currentBeingId ? this._renderSummons() : this._renderMessage() }
        </>;
    }
}

export default withRouter(Summons);