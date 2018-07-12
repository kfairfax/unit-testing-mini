<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll learn how to unit test JavaScript files by using Jest. Jest is a unit testing framework that was developed by Facebook. One of the cool features about this testing framework is that it doesn't require any configuration to get up and going and it will also automagically find `test` files that are named `.test.js` or located in a `__tests__` folder.

## Step 1
https://github.com/kfairfax/unit-testing-mini.git
### Summary

In this step, we'll initialize a `package.json` and import Jest into our project.

### Instructions

* Run `npm init -y`.
  * This creates a `package.json` with all the default values.
* Run `npm install --save-dev jest` to install Jest and save it to the development dependencies. 
* Open `package.json` and modify the `test` script:
  * In the string, replace everything with just `"jest"`.

### Solution

<details>

<summary> <code> package.json </code> </summary>

```js
{
  "name": "unit-testing-mini",
  "version": "1.0.0",
  "description": "<img src=\"https://s3.amazonaws.com/devmountain/readme-logo.png\" width=\"250\" align=\"right\">",
  "main": "functions.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/DevMountain/unit-testing-mini.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/DevMountain/unit-testing-mini/issues"
  },
  "homepage": "https://github.com/DevMountain/unit-testing-mini#readme",
  "devDependencies": {
    "jest": "^21.1.0"
  }
}
```

</details>

## Step 2

### Summary

In this step, create a JavaScript file that has a couple functions.

### Instructions

* Create a `functions.js` file.
* Use `module.exports` to export an object.
* Add a new property to the object called `returnTwo`:
  * `returnTwo` should be a function that returns the integer `2`.
* Add a new property to the object called `greeting`:
  * `greeting` should be a function with a `name` parameter.
  * `greeting` should return `"Hello, name."` where `name` is the value of the `name` parameter.
* Add a new property to the object called `add`:
  * `add` should be a function with a `num1` and `num2` parameter.
  * `add` should return the sum of `num1` and `num2`.

### Solution

<details>

<summary> <code> functions.js </code> </summary>

```js
module.exports = {
  returnTwo: function() {
    return 2;
  },
  
  greeting: function( name ) {
    return `Hello, ${ name }.`;
  },

  add: function( num1, num2 ) {
    return num1 + num2;
  }
};
```

</details>

## Step 3

### Summary

In this step, we'll create a test file to test the functions inside of `functions.js`.

### Instructions

* Create a new test file called `functions.test.js`.
* Open `functions.test.js`.
* Require `functions.js` at the top.
* Create a test for `returnTwo`:
  * This test should `expect` `returnTwo()` to equal `2`.
* Create a test for `greeting`:
  * This test should `expect` `greeting('James')` to equal `"Hello, James."`.
  * This test should `expect` `greeting('Jill')` to equal `"Hello, Jill."`.
* Create a test for `add`:
  * This test should `expect` `add(1, 2)` to equal `3`.
  * This test should `expect` `add(5, 9)` to equal `14`.

<details>

<summary> <code> functions.test.js </code> </summary>

```js
const functions = require('./functions');

test("returnTwo() should return 2.", () => {
  expect( functions.returnTwo() ).toEqual( 2 );
});

test("greeting() should return a dynamic greeting based on name.", () => {
  expect( functions.greeting('James') ).toEqual('Hello, James.');
  expect( functions.greeting('Jill') ).toEqual('Hello, Jill.');
});

test("add() should return a dynamic sum based on two number parameters.", () => {
  expect( functions.add( 1, 2 ) ).toEqual( 3 );
  expect( functions.add( 5, 9 ) ).toEqual( 14 );
});
```

</details>

## Step 4

### Summary

In this step, we'll run our `test` script and watch Jest in action.

### Instruction

* Run `npm test`.

### Solution

<img src="https://github.com/DevMountain/unit-testing-mini/blob/solution/readme-assets/1g.gif" />

## Step 5

### Summary

In this step, we'll go over how to group unit tests. This helps keep tests organized. 

### Instructions

* Open `functions.js`.
* Add a new function for `multiply`, `divide`, and `subtract`:
  * All these functions should follow the same structure as the `add` function.
* Open `functions.test.js`.
* Add a new test case for `multiply`, `divide`, and `subtract`:
  * All these tests should follow the same structure as the `add` test case.
  * Use whatever numbers you like, but include two `expect`s.
* Group the `add`, `multiply`, `divide`, and `subtract` test cases using `describe`.
  * Call this group `Math functions`.
* Run `npm test`.

### Solution 

<details>

<summary> <code> functions.js </code> </summary>

```js
module.exports = {
  returnTwo: function() {
    return 2;
  },
  
  greeting: function( name ) {
    return `Hello, ${ name }.`;
  },

  add: function( num1, num2 ) {
    return num1 + num2;
  },

  multiply: function( num1, num2 ) {
    return num1 * num2;
  },

  divide: function( num1, num2 ) {
    return num1 / num2;
  },

  subtract: function( num1, num2 ) {
    return num1 - num2;
  }
};
```

</details>

<details>

<summary> <code> functions.test.js </code> </summary>

```js
const functions = require('./functions');

test("returnTwo() should return 2.", () => {
  expect( functions.returnTwo() ).toEqual( 2 );
});

test("greeting() should return a dynamic greeting based on name.", () => {
  expect( functions.greeting('James') ).toEqual('Hello, James.');
  expect( functions.greeting('Jill') ).toEqual('Hello, Jill.');
});

describe("Math functions:", () => {
  test("add() should return a dynamic sum based on two number parameters.", () => {
    expect( functions.add( 1, 2 ) ).toEqual( 3 );
    expect( functions.add( 5, 9 ) ).toEqual( 14 );
  });

  test("multiply() should return a dynamic product based on two number parameters.", () => {
    expect( functions.multiply( 1, 2 ) ).toEqual( 2 );
    expect( functions.multiply( 5, 9 ) ).toEqual( 45 );
  });

  test("divide() should return a dynamic quotient based on two number parameters.", () => {
    expect( functions.divide( 2, 1 ) ).toEqual( 2 );
    expect( functions.divide( 9, 3 ) ).toEqual( 3 );
  });

  test("subtract() should return a dynamic difference based on two number parameters.", () => {
    expect( functions.subtract( 2, 1 ) ).toEqual( 1 );
    expect( functions.subtract( 9, 3 ) ).toEqual( 6 );
  });
});
```

</details>

<br />

<img src="https://github.com/DevMountain/unit-testing-mini/blob/solution/readme-assets/2g.gif" />

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
