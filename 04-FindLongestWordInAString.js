function findLongestWordLength(str) {
    let split = str.split(' ');
    let longestWord = split.map(x => x.length).sort((a, b) => a - b).reverse();
    return longestWord[0];
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Alternate solution...

function findLongestWordLength(str) {
    let split = str.split(' ');
    let longestWord = 0;
    for (let i = 0; i < split.length; i++) {
        if (split[i].length > longestWord) {
            longestWord = split[i].length;
        }
    }
    return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");