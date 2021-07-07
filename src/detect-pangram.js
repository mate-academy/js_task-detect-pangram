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
  let isPangram = false;

  if (phrase.length < 25) {
    isPangram = false;
  } else {
    const normalizeStr = phrase.toLowerCase().match(/[a-z]/g);
    let resultStr = '';

    for (let i = 0; i < normalizeStr.length; i++) {
      if (resultStr.includes(normalizeStr[i]) === false) {
        resultStr = resultStr + normalizeStr[i];
      }
    }

    if (resultStr.length > 25) {
      isPangram = true;
    } else {
      isPangram = false;
    }
  }

  return isPangram;
}

module.exports = detectPangram;
