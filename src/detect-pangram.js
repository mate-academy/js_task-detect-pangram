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
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  Array.from(phrase)
    .filter(char => char.match(/[a-zA-Z]/))
    .map(char => char.toLowerCase())
    .map(char => alphabet.splice(alphabet.indexOf(char), 1));

  return alphabet.length === 0;
}

module.exports = detectPangram;
