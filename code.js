function findLongestWord(sentence) {
    const words = sentence.match(/[a-zA-Z]+/g); 
    if (!words || words.length === 0) {
      return null; 
    }
  
    let longestWord = '';
    let maxLength = 0;
    let maxVowelCount = 0;
  
    for (const word of words) {
      const cleanedWord = word.toLowerCase();
      const vowelCount = (cleanedWord.match(/[aeiou]/g) || []).length;
  
      if (cleanedWord.length > maxLength || (cleanedWord.length === maxLength && vowelCount > maxVowelCount)) {
        maxLength = cleanedWord.length;
        maxVowelCount = vowelCount;
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // input
  const inputSentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
  
  // Output
  const result = findLongestWord(inputSentence);
  console.log(result);