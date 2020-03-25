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
  const res = new Set();

  phrase.toLowerCase()
    .replace(/[0-9 ,.!?@#$%^&*()-=+_]/gi, '')
    .split('')
    .map(item => {
      res.add(item);
    });

  return res.size === 26;
}

module.exports = detectPangram;
