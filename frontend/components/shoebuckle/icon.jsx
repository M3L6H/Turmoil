import React from 'react';

export default props => {
    const {
        name
    } = props;

    const className = `
        shoebuckle
        icon
        fas
        fa-${ name }
    `;
    
    return (
        <i className={ className }></i>
    );
};
