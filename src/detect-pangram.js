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
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'];
  const lowerCasePhrase = phrase.toLowerCase();
  for (let i = 0; i < lowerCasePhrase.length; i++) {
    for (let a = 0; a < alphabet.length; a++) {
      if (lowerCasePhrase[i] === alphabet[a]) {
        alphabet.splice(a, 1);
      }
    }
  };
  if (alphabet.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = detectPangram;
