/**
 * IMPORTANT: There is some copy-paste parts in this file.
 * It is needed to avoid extra functions and keep error's stack trace clean.
 */

/**
 * Throws new error. Allows simple usage of `throw` in expressions and arrow functions.
 *
 * @param {String|Error} message
 * @example
 * // usage in expression
 * const foo = value || throwError('Error');
 *
 * // usage in arrow function
 * setTimeout(() => throwError('Error'), 1000);
 */
exports.throwError = message => {
  message = Array.isArray(message) ? message.join() : message;
  const error = (message && typeof message === 'object') ? message : new Error(message);
  throw error;
};

/**
 * Conditionally throws error. Convenient replacement of `if...throw` block with one-liner:
 *
 * @param {*} condition
 * @param {String|Error|Function} message
 *
 * @example
 * throwIf(foo > 10, 'my error');
 * throwIf(foo > 10, new Error('my error'));
 * throwIf(foo > 10, () => `my error: ${JSON.stringify(data)}`); // lazy calculated Error
 */
exports.throwIf = (condition, message) => {
  if (condition) {
    message = typeof message === 'function' ? message() : message;
    message = Array.isArray(message) ? message.join() : message;
    const error = (message && typeof message === 'object') ? message : new Error(message);
    throw error;
  }
};

/**
 * Throws error in next event loop tick.
 * Useful to throw error out of promise chain.
 *
 * @param {String|Error} message
 *
 * @example
 * Promise.resolve()
 *   .then(...)
 *   .catch(e => throwAsync(e));
 */
exports.throwAsync = message => {
  setTimeout(() => {
    message = Array.isArray(message) ? message.join() : message;
    const error = (message && typeof message === 'object') ? message : new Error(message);
    throw error;
  }, 0);
};

/**
 * Converts anything to Error.
 *
 * @param {String|Error} message
 * @returns {Error}
 */
exports.toError = message => {
  message = Array.isArray(message) ? message.join() : message;
  const error = (message && typeof message === 'object') ? message : new Error(message);
  return error;
};
