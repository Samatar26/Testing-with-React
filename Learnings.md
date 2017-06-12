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
