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
            <Icon name="briefcase-medical" red mini />
            <Icon name="briefcase-medical" yellow tiny />
            <Icon name="briefcase-medical" green small />
            <Icon name="briefcase-medical" blue />
            <Icon name="briefcase-medical" purple large />
            <Icon name="briefcase-medical" pink big />
            <Icon name="briefcase-medical" grey huge />
            <Icon name="briefcase-medical" black massive />
            <Icon name="briefcase-medical" black large disabled />
            <Icon name="circle-notch" olive large loading />
            <Icon name="users" teal link />
            <Icon name="snowboarding" large flipped="horizontal" orange />
            <Icon name="snowboarding" large flipped="vertical" violet />
            <Icon name="snowboarding" large flipped="both" teal />
            <Icon name="snowboarding" large rotated="90" red />
            <Icon name="snowboarding" large rotated="180" purple />
            <Icon name="snowboarding" large rotated="270" blue />
        </div>
    </div>, root);
});