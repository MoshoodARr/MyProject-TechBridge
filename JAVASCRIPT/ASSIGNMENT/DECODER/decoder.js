const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const reverse = (alpha) => {
  const rIndex = 25 - alphabet.indexOf(alpha);
  return alphabet[rIndex];
};

function decodeWord(encodedWord) {
  let originalWord = ""; 
  for (const element of encodedWord) {
    if (alphabet.includes(element)) {
      originalWord += reverse(element);
    } else {
      originalWord += element;
    }
  }
  return originalWord;
}

const encodedMessage = reverseWord("how are you");
console.log("Encoded Message:", encodedMessage);

const decodedMessage = decodeWord(encodedMessage);
console.log("Decoded Message:", decodedMessage);