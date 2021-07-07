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
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';// write code here

  // eslint-disable-next-line max-len
  const string = phrase.replace(/[^A-Za-z]/g, '').toLowerCase();
  let x = 1;

  for (const letter of alphabet) {
    if (string.includes(letter) === false) {
      x = 0;
      break;
    }
  }

  if (x === 1) {
    return true;
  } else {
    return false;
  }
}

module.exports = detectPangram;
