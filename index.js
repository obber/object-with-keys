/**
 *
 *  objectWithKeys
 *    @param {array<string|number>}: keys
 *    @param {string|number}: defaultValue
 *
 */
exports.objectWithKeys = function(keys, defaultValue) {
  if (arguments.length === 0) {
    throw new Error("You must provide an array of strings/numbers as the first argument.");
  }
  defaultValue = defaultValue || 0;
  return keys.reduce(function(result, key) {
    result[key] = defaultValue;
    return result;
  }, {});
}