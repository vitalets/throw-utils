# throw-utils
[![Build Status](https://travis-ci.org/vitalets/throw-utils.svg?branch=master)](https://travis-ci.org/vitalets/throw-utils)
[![npm](https://img.shields.io/npm/v/throw-utils.svg)](https://www.npmjs.com/package/throw-utils)
[![license](https://img.shields.io/npm/l/throw-utils.svg)](https://www.npmjs.com/package/throw-utils)

Helpers for error throwing.

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  * [throwError(message)](#throwerrormessage)
  * [throwIf(condition, message)](#throwifcondition-message)
  * [throwAsync(message)](#throwasyncmessage)
  * [toError(message) ⇒ Error](#toerrormessage-%E2%87%92-error)
- [License](#license)
<!-- AUTO-GENERATED-CONTENT:END -->



## Installation
```bash
npm i throw-utils
```

## Usage
```js
const {throwError, throwIf} = require('throw-utils');

// throw error in arrow function one-liner:
const fn = () => throwError('Error');

// throw error in conditional one-liner:
throwIf(foo > 0, 'foo should be greater than zero!');
```

## API
<!-- AUTO-GENERATED-CONTENT:START (API) -->
<a name="throwError"></a>

### throwError(message)
Throws new error. Allows simple usage of `throw` in expressions and arrow functions.

**Kind**: global function  
**Params**

- message <code>String</code> | <code>Error</code>

**Example**  
```js
// Before:
const foo = value || throw new Error('Error');    // => SyntaxError: Unexpected token throw
setTimeout(() => throw new Error('Error'), 1000); // => SyntaxError: Unexpected token throw

// After:
const foo = value || throwError('Error');         // => OK
setTimeout(() => throwError('Error'), 1000);      // => OK
```
<a name="throwIf"></a>

### throwIf(condition, message)
Conditionally throws error. Convenient replacement of `if...throw` block with one-liner:

**Kind**: global function  
**Params**

- condition <code>\*</code>
- message <code>String</code> | <code>Error</code> | <code>function</code>

**Example**  
```js
// Before:
if (foo > 10) {
    throw new Error('my error');
}

// After:
throwIf(foo > 10, 'my error');

// Error message can be function to get calculated lazily:
throwIf(condition, () => `Incorrect data: ${JSON.stringify(data)}`);
```
<a name="throwAsync"></a>

### throwAsync(message)
Throws error in next event loop tick.
Useful to throw error out of promise chain.

**Kind**: global function  
**Params**

- message <code>String</code> | <code>Error</code>

**Example**  
```js
Promise.resolve()
  .then(...)
  .catch(e => throwAsync(e));
```
<a name="toError"></a>

### toError(message) ⇒ <code>Error</code>
Converts anything to Error.

**Kind**: global function  
**Params**

- message <code>String</code> | <code>Error</code>


<!-- AUTO-GENERATED-CONTENT:END -->

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
