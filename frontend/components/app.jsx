import React from 'react';

import { Button, Icon, Label } from './shoebuckle';

const App = () => (
    <div className="test">
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
        <div className="test-row">
            <Button animated>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name="arrow-right" />
                </Button.Content>
            </Button>
            <Button animated="vertical">
                <Button.Content visible>
                    <Icon name="shopping-cart" />
                </Button.Content>
                <Button.Content hidden>Shop</Button.Content>
            </Button>
            <Button animated="fade">
                <Button.Content visible>
                    Sign Up for a Pro Account
                </Button.Content>
                <Button.Content hidden>$12.99 a Month</Button.Content>
            </Button>
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
            <Icon name="users" teal link to="/test" border />
            <Icon name="snowboarding" large flipped="horizontal" orange />
            <Icon name="snowboarding" large flipped="vertical" violet />
            <Icon name="snowboarding" large flipped="both" teal />
            <Icon name="snowboarding" large rotated="90" red />
            <Icon name="snowboarding" large rotated="180" purple />
            <Icon name="snowboarding" large rotated="270" blue />
        </div>
        <div className="test-row inverted">
            <Icon name="briefcase-medical" inverted red />
            <Icon name="briefcase-medical" inverted orange />
            <Icon name="briefcase-medical" inverted yellow />
            <Icon name="briefcase-medical" inverted olive />
            <Icon name="briefcase-medical" inverted green />
            <Icon name="briefcase-medical" inverted teal />
            <Icon name="briefcase-medical" inverted blue />
            <Icon name="briefcase-medical" inverted violet />
            <Icon name="briefcase-medical" inverted purple />
            <Icon name="briefcase-medical" inverted pink />
            <Icon name="briefcase-medical" inverted grey />
            <Icon name="briefcase-medical" inverted black />
        </div>
        <div className="test-row">
            <Icon.Group huge>
                <Icon name="circle" red />
                <Icon name="times" inverted black transform="shrink-6" />
            </Icon.Group>

            <Icon.Group huge>
                <Icon name="bookmark" />
                <Icon name="heart" inverted red transform="shrink-10 up-2" />
            </Icon.Group>

            <Icon.Group huge>
                <Icon name="play" transform="rotate--90 grow-2"/>
                <Icon name="sun" inverted transform="shrink-10 up-2"/>
                <Icon name="moon" inverted transform="shrink-11 down-4.2 left-4"/>
                <Icon name="star" inverted transform="shrink-11 down-4.2 right-4"/>
            </Icon.Group>

            <Icon.Group huge>
                <Icon name="calendar" />
                <Icon content="27" inverted transform="shrink-8 down-3" />
            </Icon.Group>

            <Icon.Group huge>
                <Icon name="certificate" />
                <Icon content="NEW" inverted transform="shrink-11.5 rotate--30" />
            </Icon.Group>

            <Icon.Group huge>
                <Icon name="envelope" />
                <Icon content="1,419" counter />
            </Icon.Group>
        </div>
        <div className="test-row">
            <Label><Icon name="envelope" /><span>23</span></Label>
            <Label pointing>Pointing Up</Label>
            <Label pointing="right">Pointing Right</Label>
            <Label pointing="below">Pointing Down</Label>
            <Label pointing="left">Pointing Left</Label>
            <Button>
                <Label floating teal small>22</Label>
                Floating
            </Button>
            <Label green circular huge>3</Label>
            <Label link to="/test" orange>I'm a link</Label>
        </div>
        <div className="test-row inverted">
            <Label inverted red>red</Label>
            <Label inverted orange>orange</Label>
            <Label inverted yellow>yellow</Label>
            <Label inverted olive>olive</Label>
            <Label inverted green>green</Label>
            <Label inverted teal>teal</Label>
            <Label inverted blue>blue</Label>
            <Label inverted violet>violet</Label>
            <Label inverted purple>purple</Label>
            <Label inverted pink>pink</Label>
            <Label inverted grey>grey</Label>
            <Label inverted black>black</Label>
        </div>
    </div>
);

export default App;