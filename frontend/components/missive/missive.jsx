import React, { Component } from 'react';

export default class Missive extends Component {
    constructor(props) {
        super(props);
    
        this.lastMissive = React.createRef();
    }

    componentDidMount() {
        if (this.lastMissive.current) {
            this.lastMissive.current.scrollIntoView();
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.lastMissive.current) {
            this.lastMissive.current.scrollIntoView();
        }
    }
    
    render() {
        const { missives, inverted } = this.props;
    
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
                        <pre 
                            key={ idx } 
                            ref={ idx === missives.length - 1 && this.lastMissive }
                        >
                            { body }
                        </pre>
                    ))}
                </div>
            </div>
        );
    }
}
