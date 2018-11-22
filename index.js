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
exports.throwError = function (message) {
  throw exports.toError(message);
};

/**
 * Conditionally throws error. Convenient replacement of 'if...throw' block with one-liner:
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
exports.throwIf = function (condition, message) {
  if (condition) {
    message = typeof message === 'function' ? message() : message;
    exports.throwError(message);
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
exports.throwAsync = function (message) {
  setTimeout(() => exports.throwError(message), 0);
};

/**
 * If message is string converts it to Error, otherwise returns Error.
 *
 * @param {String|Error} message
 * @returns {Error}
 */
exports.toError = function (message) {
  return message && typeof message === 'object' ? message : new Error(message);
};
