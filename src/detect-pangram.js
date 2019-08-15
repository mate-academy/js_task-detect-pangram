'use strict';

/**
 * Implement detectPangram function:
 *
 * A pangram is a sentence that contains every single letter of the alphabet
 * at least once. For example, the sentence "The quick brown fox jumps over
 * the lazy dog" is a pangram, because it uses the letters A-Z at least once
 * (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it
 * is, False if not. Ignore numbers and punctuation.
 *
 * @param {string} phrase
 *
 * @return {boolean}
 */
function detectPangram(phrase) {
  const arrayedString = phrase.split('');
  let countingletters = 0;
  let strNoRepetition = '';

  for (let x = 0; x < arrayedString.length; x++) {
    let i = 0;
    for (let y = 0; y < arrayedString.length; y++) {
      if (arrayedString[x] === arrayedString[y]) {
        i++;
      }
      if (i >= 2) {
        arrayedString[y] = '';
        i = 0;
      }
    }
  }
  strNoRepetition = arrayedString.join('');

  for (let x = 0; x < arrayedString.length; x++) {
    if (strNoRepetition.charAt(x).match(/[a-zA-Z]/)) {
      countingletters++;
    }
  }

  return countingletters === 26;
}
module.exports = detectPangram;
