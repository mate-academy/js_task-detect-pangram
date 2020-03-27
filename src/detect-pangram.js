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
  let noSymbols = phrase.replace(/[ !_-]/g, '');

  noSymbols = noSymbols.toLocaleLowerCase();

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphaArray = alphabet.split('');
  const newStringArray = noSymbols.split('');

  for (let i = 0; i < newStringArray.length; i++) {
    for (let j = 0; j < alphaArray.length; j++) {
      if (newStringArray[i] === alphaArray[j]) {
        alphaArray.splice(j, 1);
      }
    }
  }

  if (alphaArray.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = detectPangram;
