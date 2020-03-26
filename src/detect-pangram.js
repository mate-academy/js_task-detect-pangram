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

// First solution with Set
/* function detectPangram(phrase) {
  if (phrase === '') {

    return false;
  }
  const stringSet = new Set(
    phrase
      .toLowerCase()
      .match(/[a-z]/g)
  );

  if (stringSet.size === 26 ) {
    return true;
  }

  return false;
} */

// Second Solution

function detectPangram(phrase) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((elem) => phrase.toLowerCase().includes(elem)) || false;
}

module.exports = detectPangram;
