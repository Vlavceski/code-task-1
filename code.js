
const input = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"

const result = findWord(input);
console.log(result)

function findWord(sentence) {
    const words = sentence.match(/[a-zA-Z]+/g);
    if (!words || words.length === 0) {
        return null;
    }

    let longestWord = "";
    let maxLen = 0;
    let maxVCount = 0;

    for (const word of words) {
        const cleanedWord = word.toLowerCase();
        const vCount = (cleanedWord.match((/[aeiou]/g) || [])).length
        if (cleanedWord.length > maxLen || (cleanedWord.length === maxLen && vCount > maxVCount)) {
            maxLen = cleanedWord.length
            maxVCount = vCount;
            longestWord = word;
        }
    }
    return longestWord;

}
