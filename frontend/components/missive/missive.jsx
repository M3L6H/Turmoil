import React from 'react';

export default props => {
    const { missives, inverted } = props;

    const { username, createdAt, created_at } = missives[0];

    const className = `missive ${ inverted ? " inverted" : "" }`;

    const date = new Date(createdAt || created_at);
    const now = new Date();
    let dateString = date.toLocaleDateString("en-US");
    let hours = date.getHours() % 12;
    hours = hours === 0 ? 12 : hours;
    const minutes = date.getMinutes().toString().padStart(2, "0");

    if (date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
        if (date.getDate() === now.getDate()) {
            dateString = `Today at ${ hours }:${ minutes } ${ date.getHours() < 12 ? "AM" : "PM" }`;
        } else if (date.getDate() + 1 === now.getDate()) {
            dateString = `Yesterday at ${ hours }:${ minutes } ${ date.getHours() < 12 ? "AM" : "PM" }`;
        }
    }

    return (
        <div className={ className }>
            <div className="missive-header">
                { username }
                <span className="missive-date">
                    { dateString }
                </span>
            </div>
            <div className="missive-body">
                { missives.map(({ body }, idx) => (
                    <pre key={ idx }>{ body }</pre>
                ))}
            </div>
        </div>
    );
};
