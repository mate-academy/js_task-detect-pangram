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
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  let k = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toLowerCase() >= 'a' && phrase[i].toLowerCase() <= 'z') {
      for (let j = 0; j < alph.length; j++) {
        if (phrase[i].toLowerCase() === alph[j]) {
          k++;
          break;
        }
      }
    }
  }

  return k > 25;
}

module.exports = detectPangram;
