import React from 'react';

export default props => {
    const { missive: { body, username, createdAt }, inverted } = props;

    const className = `missive ${ inverted ? " inverted" : "" }`;

    return (
        <div className={ className }>
            <div className="missive-header">
                { username }
                <span className="missive-date">
                    { createdAt }
                </span>
            </div>
            <div className="missive-body">
                <pre>{ body }</pre>
            </div>
        </div>
    );
};
