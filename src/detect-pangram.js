'use strict';

function detectPangram(phrase) {
  const upperPhrase = phrase.toUpperCase();

  for (let i = 65; i < 91; i++) {
    if (!upperPhrase.includes(String.fromCodePoint(i))) {
      return false;
    }
  }

  return true;
}

module.exports = detectPangram;
