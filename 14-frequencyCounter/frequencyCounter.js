function frequencyCounter(word) {
  const freq = {};
  for (let i = 0; i < word.length; i++) {
    freq[word[i]] = 0;
  }
  for (let i = 0; i < word.length; i++) {
    freq[word[i]] += 1;
  }
  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;