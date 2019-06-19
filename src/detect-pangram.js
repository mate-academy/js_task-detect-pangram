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
  // write code here
  if (!phrase) {
    return false;
  }

  const upperPhrase = phrase.toUpperCase();
  const arr = new Array(26);

  for (let i = 0; i < upperPhrase.length; i++) {
    if (upperPhrase[i] >= 'A' && upperPhrase[i] <= 'Z'
      && arr[upperPhrase.charCodeAt(i) - 65] === undefined) {
      arr[upperPhrase.charCodeAt(i) - 65] = 1;
    }
  }

  for (let i = 0; i < 26; i++) {
    if (arr[i] === undefined) {
      return false;
    }
  }

  return true;
}

module.exports = detectPangram;
