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
  let unique = '';
  const sortStr = phrase.replace(/[^A-Za-z]/g, '').toLowerCase().trim();
  for (let i = 0; i < sortStr.length; i++) {
    if (unique.indexOf(sortStr[i]) === -1) {
      unique += sortStr[i];
    }
  }
  return unique.length === 26;
}

module.exports = detectPangram;
