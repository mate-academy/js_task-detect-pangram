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
  const alphabet = new Set();

  for (let i = 65; i < 91; i++) {
    alphabet.add(String.fromCharCode(i));
  }

  for (let i = 0; i < phrase.length; i++) {
    alphabet.delete(phrase[i].toUpperCase());
  }

  return alphabet.size === 0;
}

module.exports = detectPangram;
