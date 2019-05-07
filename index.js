/**
 * IMPORTANT: There is some copy-paste parts in this file.
 * It is needed to avoid extra functions and keep error's stack trace clean.
 */

/**
 * Throws new error. Allows simple usage of `throw` in expressions and arrow functions.
 *
 * @param {String|Error} message
 * @example
 * // Before:
 * const foo = value || throw new Error('Error');    // => SyntaxError: Unexpected token throw
 * setTimeout(() => throw new Error('Error'), 1000); // => SyntaxError: Unexpected token throw
 *
 * // After:
 * const foo = value || throwError('Error');         // => OK
 * setTimeout(() => throwError('Error'), 1000);      // => OK
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
 * // Before:
 * if (foo > 10) {
 *     throw new Error('my error');
 * }
 *
 * // After:
 * throwIf(foo > 10, 'my error');
 *
 * // Error message can be function to get calculated lazily:
 * throwIf(condition, () => `Incorrect data: ${JSON.stringify(data)}`);
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
