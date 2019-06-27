# throw-utils
[![Build Status](https://travis-ci.org/vitalets/throw-utils.svg?branch=master)](https://travis-ci.org/vitalets/throw-utils)
[![npm](https://img.shields.io/npm/v/throw-utils.svg)](https://www.npmjs.com/package/throw-utils)
[![license](https://img.shields.io/npm/l/throw-utils.svg)](https://www.npmjs.com/package/throw-utils)

Helpers for error throwing with clean syntax.

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
   
1. Return value or throw error:
   ```diff
   const {throwError} = require('throw-utils');

   function foo() {
   -  if (!result) {
   -    throw new Error('MyError');
   -  }
   -  return result;
     
   +  return result || throwError('MyError');
   }
   ```   

2. Throw error in arrow function one-liner:
   ```diff
   const {throwError} = require('throw-utils');

   - const fn = () => { throw new Error('Error'); };
   + const fn = () => throwError('Error');
   ```

3. Throw error in conditional one-liner:
   ```diff
   const {throwIf} = require('throw-utils');

   - if (foo > 0) {
   -   throw new Error('foo should be greater than zero!');
   - }

   + throwIf(foo > 0, 'foo should be greater than zero!');
   ```
4. Throw error in next tick:
   ```diff
   const {throwAsync} = require('throw-utils');

   - setTimeout(() => {
   -   throw new Error('MyError');
   - }, 0);

   + throwAsync('MyError');
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
// usage in expression
const foo = value || throwError('Error');

// usage in arrow function
setTimeout(() => throwError('Error'), 1000);
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
throwIf(foo > 10, 'my error');
throwIf(foo > 10, new Error('my error'));
throwIf(foo > 10, () => `my error: ${JSON.stringify(data)}`); // lazy calculated Error
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
