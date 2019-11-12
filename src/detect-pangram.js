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
  const englishLetters = 26;

  const phraseToArrayWithoutSpaceToLowerCasefromAToZ
  = phrase.replace(/\s/g, '').toLowerCase().split('').sort();
  const arr = phraseToArrayWithoutSpaceToLowerCasefromAToZ;

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === arr[k + 1]) {
      delete arr[k];
    }
  }

  return (arr.sort().slice(0, englishLetters).length === englishLetters);
}

module.exports = detectPangram;
