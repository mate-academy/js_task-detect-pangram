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
 *push
 * @param {string} phrase
 *
 * @return {boolean}
 */
function detectPangram(phrase) {
  const letters = [];
  const replacePhrase = phrase.replace(/[^a-zA-Z]/g, '').toLowerCase();

  for (let i = 0; i < replacePhrase.length; i++) {
    if (!letters.includes(replacePhrase[i])) {
      letters.push(replacePhrase[i]);
    }
  }

  return letters.length === 26;
}

module.exports = detectPangram;
