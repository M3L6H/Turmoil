import React from 'react';
import ReactDOM from "react-dom";

import { Button, Icon } from './components/shoebuckle';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<div className="test">
        <div className="test-row">
            <Button>Hello World</Button>
            <Button primary>Hello World</Button>
            <Button secondary>Hello World</Button>
            <Button content="Shorthand" primary />
        </div>
        <div className="test-row">
            <Button basic>Hello World</Button>
            <Button basic red>Hello World</Button>
            <Button basic orange>Hello World</Button>
            <Button basic yellow>Hello World</Button>
            <Button basic olive>Hello World</Button>
            <Button basic green>Hello World</Button>
            <Button basic teal>Hello World</Button>
            <Button basic blue>Hello World</Button>
            <Button basic violet>Hello World</Button>
            <Button basic purple>Hello World</Button>
            <Button basic pink>Hello World</Button>
            <Button basic grey>Hello World</Button>
            <Button basic black>Hello World</Button>
        </div>
        <div className="test-row inverted">
            <Button basic inverted>Hello World</Button>
            <Button basic inverted red>Hello World</Button>
            <Button basic inverted orange>Hello World</Button>
            <Button basic inverted yellow>Hello World</Button>
            <Button basic inverted olive>Hello World</Button>
            <Button basic inverted green>Hello World</Button>
            <Button basic inverted teal>Hello World</Button>
            <Button basic inverted blue>Hello World</Button>
            <Button basic inverted violet>Hello World</Button>
            <Button basic inverted purple>Hello World</Button>
            <Button basic inverted pink>Hello World</Button>
            <Button basic inverted grey>Hello World</Button>
            <Button basic inverted black>Hello World</Button>
        </div>
        <div className="test-row">
            <Icon name="briefcase-medical" mini />
            <Icon name="briefcase-medical" tiny />
            <Icon name="briefcase-medical" small />
            <Icon name="briefcase-medical" />
            <Icon name="briefcase-medical" large />
            <Icon name="briefcase-medical" big />
            <Icon name="briefcase-medical" huge />
            <Icon name="briefcase-medical" massive />
        </div>
    </div>, root);
});