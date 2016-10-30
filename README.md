# objectWithKeys

Simple utility function to turn an array of strings/numbers into an object with the strings/numbers from the array as keys.

This function takes in an optional default value as the second argument.

## Install:

```bash
npm install object-with-keys
```

or

```bash
yarn add object-with-keys
```

## Usage:

```javascript
var objectWithKeys = require('object-with-keys');

var initialState = objectWithKeys([
  0, 1, 2, 3, 4, 5, 6, 7, 8
], 0);

console.log(initialState); /* =>
  {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
  }
*/
```

This function is useful for creating empty, initial state objects in state trees like ngrx/store or redux.