import React from 'react';

import { 
    Button, 
    Form,
    Icon, 
    Label,
    Message
} from './shoebuckle';

// const App = () => (
    
// );

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            messageVisible: true
        };
    }
    
    render() {
        const { messageVisible } = this.state;
        
        return (
            <div className="test">
                <div className="test-row">
                    <Button>Hello World</Button>
                    <Button primary>Hello World</Button>
                    <Button secondary>Hello World</Button>
                    <Button content="Shorthand" primary />
                </div>
                <div className="test-row">
                    <Button red>Red</Button>
                    <Button orange>Orange</Button>
                    <Button yellow>Yellow</Button>
                    <Button olive>Olive</Button>
                    <Button green>Green</Button>
                    <Button teal>Teal</Button>
                    <Button blue>Blue</Button>
                    <Button violet>Violet</Button>
                    <Button purple>Purple</Button>
                    <Button pink>Pink</Button>
                    <Button grey>Grey</Button>
                    <Button black>Black</Button>
                </div>
                <div className="test-row inverted">
                    <Button inverted red>Red</Button>
                    <Button inverted orange>Orange</Button>
                    <Button inverted yellow>Yellow</Button>
                    <Button inverted olive>Olive</Button>
                    <Button inverted green>Green</Button>
                    <Button inverted teal>Teal</Button>
                    <Button inverted blue>Blue</Button>
                    <Button inverted violet>Violet</Button>
                    <Button inverted purple>Purple</Button>
                    <Button inverted pink>Pink</Button>
                    <Button inverted grey>Grey</Button>
                    <Button inverted black>Black</Button>
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
                <div className="test-row">
                    <Label.Group big green>
                        <Label>Group</Label>
                        <Label>group</Label>
                        <Label>grouP</Label>
                    </Label.Group>
                </div>
                <div className="test-row">
                    <Form>
                        <Form.Field>
                            <Form.Label>First Name</Form.Label>
                            <Form.Input placeholder="First Name" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Input placeholder="Last Name" />
                        </Form.Field>
                        <Form.Checkbox label="I agree to the Terms and Conditions" />
                        <Button green fluid type="submit">Submit</Button>
                    </Form>
                </div>
                <div className="test-row">
                    <Message>
                        <Message.Header>Changes in Service</Message.Header>
                        <p>
                            We updated our privacy policy here to better service our
                            customers. We recommend reviewing the changes.
                        </p>
                    </Message>
                </div>
                <div className="test-row">
                    <Message header="Changes in Service" content="Built with props!" />
                </div>
                <div className="test-row">
                    <Message header="New Site Features">
                        <Message.List>
                            <Message.Item>You can now have cover images on blog pages</Message.Item>
                            <Message.Item>Drafts will now auto-save while writing</Message.Item>
                        </Message.List>
                    </Message>
                </div>
                <div className="test-row">
                    <Message header="New Site Features" list={ ["Made", "with", "props!"] } />
                </div>
                <div className="test-row">
                    <Message
                        header="Dismissible!"
                        content="Click the x to dismiss!"
                        visible={ messageVisible }
                        onDismiss={
                            () => {
                                console.log("Hiding");
                                this.setState({ messageVisible: false });
                                setTimeout(() => this.setState({ messageVisible: true }), 3000);
                            } 
                        }
                    />
                </div>
                <div className="test-row">
                    <Message floating content="A floating message!" />
                </div>
                <div className="test-row">
                    <Message compact content="A message can only take up the width of its content." />
                </div>
                <div className="test-row column">
                    <Message attached content="I can attach on top" />
                    <Message attached="bottom" content="Or on the bottom!" />
                </div>
                <div className="test-row">
                    <Message info header="Info" content="Cool information." />
                    <Message warning header="Warning" content="Be careful..." />
                    <Message success header="Success" content="You did it!" />
                    <Message error header="Error" content="Something bad happened." />
                </div>
                <div className="test-row">
                    <Form>
                        <Form.Field error>
                            <Form.Label>First Name</Form.Label>
                            <Form.Input placeholder="First Name" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Input placeholder="Last Name" />
                        </Form.Field>
                        <Form.Checkbox error label="I agree to the Terms and Conditions" />
                        <Button green fluid type="submit">Submit</Button>
                    </Form>
                </div>
                <div className="test-row">
                    <Form>
                        <Form.Input 
                            label="First Name" 
                            placeholder="First Name" 
                            error={{ content: "First name is a required field", pointing: "below" }}
                        />
                        <Form.Field>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Input placeholder="Last Name" />
                        </Form.Field>
                        <Form.Checkbox error label="I agree to the Terms and Conditions" />
                        <Button green fluid type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default App;