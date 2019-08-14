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
  let tempArr = [];
  tempArr = phrase.split('');
  let iter = 0;
  let strNoRepetition = '';

  for (let x = 0; x < tempArr.length; x++) {
    let i = 0;
    for (let y = 0; y < tempArr.length; y++) {
      if (tempArr[x] === tempArr[y]) {
        i++;
      }
      if (i >= 2) {
        tempArr[y] = '';
        i = 0;
      }
    }
  }
  strNoRepetition = tempArr.join('');

  for (let x = 0; x < tempArr.length; x++) {
    if (strNoRepetition.charAt(x).match(/[a-zA-Z]/)) {
      iter++;
    }
  }

  return iter === 26;
}
module.exports = detectPangram;
