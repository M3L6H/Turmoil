import React, { Component } from 'react';

import withWindowDimensions from '../hocs/with_window_dimensions';

class Bubbles extends Component {
    constructor(props) {
        super(props);
    
        this.canvasRef = React.createRef();
        this.state = {
            circles: []
        };

        this._updateAnimation = this._updateAnimation.bind(this);
    }

    _generateCircles() {
        const { windowWidth, windowHeight } = this.props;
        
        const circles = [];
        const min = Math.min(windowHeight, windowWidth)
        const numCircles = Math.floor(min / 36);
        for (let i = 0; i < numCircles; ++i) {
            circles.push({
                x: Math.random() * windowWidth,
                y: Math.random() * windowHeight,
                radius: Math.random() * min * 0.2 + 50,
                vel: { 
                    dx: Math.random() * 10 - 5,
                    dy: Math.random() * 10 - 5
                }
            });
        }

        return circles;
    }

    componentDidMount() {
        this.setState({ circles: this._generateCircles() });
        this.rAF = requestAnimationFrame(this._updateAnimation);
    }

    _drawCircle(ctx, { x, y, radius }) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    _updateAnimation() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext("2d");
        const width = canvas.width;
        const height = canvas.height;

        ctx.fillStyle = "rgb(90, 20, 20, 0.3)";

        const circles = this.state.circles.slice(0);

        ctx.clearRect(0, 0, width, height);

        circles.forEach(circle => {
            circle.x += circle.vel.dx;
            circle.y += circle.vel.dy;

            if (circle.x + circle.radius < 0) {
                circle.x = width + circle.radius - 1;
            }

            if (circle.x - circle.radius > width) {
                circle.x = 1 - circle.radius;
            }

            if (circle.y + circle.radius < 0) {
                circle.y = height + circle.radius - 1;
            }

            if (circle.y - circle.radius > height) {
                circle.y = 1 - circle.radius;
            }

            this._drawCircle(ctx, circle);
        });

        this.setState({ circles });
        this.rAF = requestAnimationFrame(this._updateAnimation);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
    }
    
    render() {
        const { windowWidth, windowHeight } = this.props;

        return (
            <canvas 
                width={ windowWidth }
                height={ windowHeight }
                className="bubbles"
                ref={ this.canvasRef }
            ></canvas>
        );
    }
};

export default withWindowDimensions(Bubbles);