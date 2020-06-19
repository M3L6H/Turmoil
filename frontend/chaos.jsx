import React from 'react';
import ReactDOM from "react-dom";

import { Button } from './components/shoebuckle';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Button>Hello World</Button>, root);
});