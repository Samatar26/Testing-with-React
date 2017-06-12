### Testing frameworks

You'll find that in most testing frameworks, you'll find that they all carry similar terms of `describe`, `it` and `expect/should`. There's only very slight differences between these testing frameworks. They're all roughly setup in the same fashion.

- Describe
Describe is used to convey to other developers that a certain number of tests are related in some fashion.
- It
'It' blocks try to make an assertion about a very particular fact about the testing subject
- expect
To make a single assertion about a target.


```js
//use describe to group together similar tests

describe('App Component', () => {
  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {
    //Use 'expect' to make an 'assertion' about a target - Assertion - I want to have a reasonable belief that some very specific fact about my target is true.
    expect;
  });
});

```
All of our specs follow the type of syntax as shown above. `Describe` takes the first argument of a string and a second argument of a function. Inside of this function we will have all of the specs that are grouped with the `describe` block of 'App'. We'll have a bunc of `it` statements which will describe some behaviour of our component _App_. This is a core attribute of how `mocha` runs tests. Mocha takes a record of all the functions that we declare and pass into the describe and it blocks, it doesn't get immediately executed. This way Mocha can que up our tests to run in the future, this way it can safely execute our code which may throw tremendous errors. _Therefore the purpose of wrapping all of our specs in function calls is so that Mocha can safely execute our tests without worrying about an error being thrown_.    

We expect our component to have a class of 'comment-box'. with the assertion below. We use these kinds of assertions to test very particular attributes of our target.`expect` is a function which returns an object and takes an argument of our React component.

![assertions](https://user-images.githubusercontent.com/22747985/27045525-0ff04250-4f99-11e7-895e-ba1c17655c54.png)



When testing whether our App component pulls in a React component correctly, it's better to test whether the corresponding HTML has been produced rather than testing whether the render method of App returns an instance of a `CommentBox` component.

```js

import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});

```

 When you have tests that are similar inside of a particular component, you have the ability to nest them inside a nested `describe` call, you can also nest beforeEach's and they're exclusive to the describe blocks. As we want to test the case in which the user clicks on a text area and starts entering some text, we can test this by using the simulate function. It's a tool which simulates fake events inside of our component's Html.

```js
import { renderComponent, expect } from './../test_helper';
import CommentBox from './../../src/components/CommentBox';

describe('Comment', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class of comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(()=>{
      component.find('textarea').simulate('change', 'new comment');

    })
    it('shows text that is in the textarea', () => {

    });

    it('when submitted, clears the input', () => {

    });
  });
});


```

When importing action creators, the docs recommend to bind it inside a function mapDispatchToProps, but you can also import all of the action creators as `actions` and pass it into the second argument of the connect function as so:
```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }
  handleChange = ev => {
    this.setState({ comment: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <button action="submit">Submit comment</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);

```
