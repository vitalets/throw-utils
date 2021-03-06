# throw-utils

[![Actions Status](https://github.com/vitalets/throw-utils/workflows/autotests/badge.svg)](https://github.com/vitalets/throw-utils/actions)
[![npm](https://img.shields.io/npm/v/throw-utils.svg)](https://www.npmjs.com/package/throw-utils)
[![license](https://img.shields.io/npm/l/throw-utils.svg)](https://www.npmjs.com/package/throw-utils)

One-liner helpers for convenient error throwing.

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->
- [Installation](#installation)
- [Usecases](#usecases)
- [API](#api)
  * [throwError(error)](#throwerrorerror)
  * [throwIf(condition, error)](#throwifcondition-error)
  * [throwAsync(error)](#throwasyncerror)
  * [toError(value) ⇒ Error](#toerrorvalue-%E2%87%92-error)
- [License](#license)
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation
```bash
npm i throw-utils
```

## Usecases

1. Return value or throw error if value is empty:
   ```diff
   const { throwError } = require('throw-utils');
   
   function foo() {
     // ...
    
   - if (result) {
   -   return result;
   - } else {
   -   throw new Error('Empty result');
   - }
    
   + return result || throwError('Empty result');
   }
   ```

2. Throw error in arrow function one-liner:
   ```diff
   - const fn = () => { throw new Error('foo'); };
   
   + const fn = () => throwError('foo');
   ```

3. Throw error in conditional one-liner:
   ```diff
   const { throwIf } = require('throw-utils');
   
   function foo(a, b) {
   - if (!a) {
   -   throw new Error('Parameter a is required.');
   - }
   - if (!b) {
   -   throw new Error('Parameter b is required.');
   - }
   
   + throwIf(!a, 'Parameter a is required.');
   + throwIf(!b, 'Parameter b is required.');
   }   
   ```
   
4. Throw error in next tick:
   ```diff
   const { throwAsync } = require('throw-utils');
   
   - setTimeout(() => {
   -   throw new Error('foo');
   - }, 0);

   + throwAsync('foo');
   ```   

## API
<!-- AUTO-GENERATED-CONTENT:START (API) -->
<a name="throwError"></a>

### throwError(error)
Throws new error. Allows simple usage of `throw` in expressions and arrow functions.

**Kind**: global function  
**Params**

- error <code>String</code> | <code>Error</code>

**Example**  
```js
const { throwError } = require('throw-utils');

// usage in expression
const foo = value || throwError('Error');

// usage in arrow function
setTimeout(() => throwError('Error'), 1000);
```
<a name="throwIf"></a>

### throwIf(condition, error)
Conditionally throws error. Convenient replacement of `if...throw` block with one-liner:

**Kind**: global function  
**Params**

- condition <code>\*</code>
- error <code>String</code> | <code>Error</code> | <code>function</code>

**Example**  
```js
const { throwIf } = require('throw-utils');

throwIf(foo > 10, 'my error');
throwIf(foo > 10, new Error('my error'));
throwIf(foo > 10, () => `my error: ${JSON.stringify(data)}`); // lazy calculated Error
```
<a name="throwAsync"></a>

### throwAsync(error)
Throws error in next event loop tick.
Useful to throw error out of promise chain.

**Kind**: global function  
**Params**

- error <code>String</code> | <code>Error</code>

**Example**  
```js
const { throwAsync } = require('throw-utils');

Promise.resolve()
  .then(...)
  .catch(e => throwAsync(e));
```
<a name="toError"></a>

### toError(value) ⇒ <code>Error</code>
Converts anything to Error.

**Kind**: global function  
**Params**

- value <code>String</code> | <code>Error</code>


<!-- AUTO-GENERATED-CONTENT:END -->

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
