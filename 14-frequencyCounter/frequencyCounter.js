function frequencyCounter(word) {
  const freq = {};
  for (let i = 0; i < word.length; i++) {
    if (freq[word[i]]) {
      freq[word[i]]++;
    } else {
      freq[word[i]] = 1;
    }
    
  }
  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;