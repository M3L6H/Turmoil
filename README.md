<h1 align="center">Turmoil</h1>

<h4 align="center">A fantastical <a href="https://discord.com/new">discord</a> clone.</h4>

#### Table of Contents
- [About](#about)
  - [Live Demo)](#live-demo)
- [Technologies](#technologies)
- [Features](#features)
  - [Drag and drop](#drag-and-drop)
  - [Responsiveness](#responsiveness)
  - [Shoebuckle](#shoebuckle)

## About

Turmoil is live-chat application based on discord. It includes the ability to
make servers, groups, and channels. Channels can be freely moved between groups,
and each group has its own chat log.

Users can sign up easily and are able to sign in with either their email or
their username.

Additionally, it is fully responsive, supporting both mobile and desktop viewing.

### [Live Demo]([turmoi](http://turmoil.herokuapp.com/))

## Technologies

The app is built with a React/Redux frontend. No external frontend libraries
were used, so it rolls with its own Bootstrap-lite called Shoebuckle.

Because the Babel transpiler is included, all the javascript was written in ES6
and higher syntax.

On the backend, Rails was used with a postgresql database. BCrypt was used for
authentication.

Live chat was accomplished using ActionCable and Redis.

## Features

### Drag and drop

A significant challenge was implementing the drag and drop functionality for
channels and groups. Since external frontend libraries were not being used,
popular options like react-dnd were out of the question. Additionally there was
the added complexity of maintaining the order in the backend. Another
significant challenge was the ability for channels to be dragged in and out of
groups, and even onto the root level.

In the final implementation, a linked-list approach was used to manage the
order. On the backend, channels also kept track of their parents. This is
sufficient information to maintain the order. Additionally, with a linked list
approach, at most 5 queries have to be made to update the ordering (often times
less). This is in comparison to an approach that maintains an order index,
requiring up to `O(n)` queries to reorder.

On the frontend, a custom linked list data structure was built. This was used in
combination with nesting to allow for channels inside of groups. The linked list
used sentinal nodes to maintain its head and tail. Of particular note was the
C++-style iterator that I built for ease-of-use.

```js
start() {
    const value = this.size > 0 ? this.getItem(this.head.next) : null;

    const it = {
        value,
        next: () => {
            it.value = value && this.items[it.value.next] ? this.getItem(it.value.next) : null;
        }
    };

    return it;
}
```

### Responsiveness

Building for both mobile and desktop is a significant challenge. It cannot
simply be accomplished by media queries alone. Sometimes the react components
also need to be aware of whether they are in a mobile view or a desktop one.

Rather than repeat the same logic multiple times in different components, a
higher order component was custom built for the task.

```js
export default (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = { windowWidth: window.innerWidth, windowHeight: window.innerHeight, desktop: false };
            this.updateWindowDimensions = debounce(this.updateWindowDimensions.bind(this));
        }

        componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener("resize", this.updateWindowDimensions);
        }

        // Remove the event listener to avoid memory leaks
        componentWillUnmount() {
            window.removeEventListener("resize", this.updateWindowDimensions);
        }

        updateWindowDimensions() {
            this.setState({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                desktop: window.innerWidth > BREAKPOINT
            });

            // Update viewport height and width 
            const vh = window.innerHeight * 0.01;
            const vw = window.innerWidth * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
            document.documentElement.style.setProperty("--vw", `${vw}px`);
        }

        render() {
            return <WrappedComponent { ...this.state } { ...this.props } />;
        }
    };
}
```

### Shoebuckle

A big goal in this project was to keep the code as clean as possible. This meant
the JSX especially, which can very easily get out of hand and become quite
unreadable.

Because of this, shoebuckle was made. The components were designed to modular so
they could be mixed and matched. They were designed to support custom prop
shorthands, like `<Button red />` to make a red button, or
`<Label content="hi" />` instead of `<Label>hi</Label>`.

Another key feature was the ability to use these custom components both in a
controlled and uncontrolled manner. Even a combination of both was supported.
This proved to be a very useful design decision during development.

Additionally, they were broken into semantic "namespaces" so that related
components could easily be imported and used together.

Chief among these was the `Form` component which supported a number of sub-
components: `Field`, `Input`, `Label`, `Checkbox`, `RadioGroup`, etc. This
makes building the following form

![Image of authentication form](/images/form.jpg)

as easy as:

```JSX
<Form onSubmit={ this._handleSubmit } errors={ errors }>
    <Form.Input
        required={ formType === "signUp" }
        placeholder={ placeholder }
        label={ label }
        data-type="username"
        onChange={ this._handleChange }
        value={ username }
    />
    { formType === "signUp" && (
        <Form.Input
            required
            placeholder="Email"
            label="How may we contact you?"
            data-type="email"
            onChange={ this._handleChange }
            value={ email }
        />
    )}
    <Form.Input
        required={ formType === "signUp" }
        placeholder="Password"
        type="password"
        label="What is the password?"
        data-type="password"
        onChange={ this._handleChange }
        value={ password }
    />
    <Button animated fluid green type="submit">
        <Button.Content visible>{ title }</Button.Content>
        <Button.Content hidden>
            <Icon name="arrow-right" />
        </Button.Content>
    </Button>
    { formType === "signIn" && 
        <Button green fluid onClick={ this._handleDemoUser }>Demo User</Button>
    }
    { this._renderRedirect() }
</Form>
```
