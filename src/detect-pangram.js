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
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const toLowerCasePhrase = phrase.toLowerCase();
  let count = 0;

  for (let i = 0; i < letters.length; i++) {
    if (toLowerCasePhrase.includes(letters[i])) {
      count++;
    }
  }

  if (count === 26) {
    return true;
  } else {
    return false;
  }
}

module.exports = detectPangram;
