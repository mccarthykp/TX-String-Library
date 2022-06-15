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

/**
 * Capitalizes the all characters of a string.
 * @param {string} string
 * @returns {string} a string with all characters capitalized.
 */
function allCaps(string) {
  return string.toUpperCase();
}

/**
 * Capitalizes the first character of each word in a string.
 * @param {string} string
 * @returns {string} a string with the first character of each word capitalized.
 */
 function capitalizeWords(string) {
  let arr = string.split(' ');
  let newString = '';

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      newString += capitalize(arr[i]);
    } else {
      newString += ' ' + capitalize(arr[i]);
    }
  }
  return newString;
}

/**
 * Capitalizes the first character of each word in a string except for 'the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from', unless it is the first word in the string.
 * @param {string} string
 * @returns {string} a string with the first character of each word capitalized, less the exceptions, unless it is the first word.
 */
 function capitalizeHeadline(string) {
  let arr = string.split(' ');
  let newString = '';
  let exceptList = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from', 'of', 'is'];

  newString += capitalize(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (!exceptList.includes(arr[i])) {
      newString += ' ' + capitalize(arr[i]);
    } else {
      newString += ' ' + arr[i];
    }
  }
  return newString;
}
