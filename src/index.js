/**
 * Capitalizes the first character of a string.
 * @param {string} string
 * @returns {string} a string with the first character capitalized.
 */
function capitalize(string) {
  let char = string[0].toUpperCase();
  let remain = string.slice(1);
  let returnString = char + remain;
  return returnString;

}
