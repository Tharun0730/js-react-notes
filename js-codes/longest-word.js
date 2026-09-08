const sentence = "I love learning Javascripttt";

function findLongestWord(sentence) {
  let result = "";
  let temp = "";

  for (const char of sentence) {
    if (char !== " ") {
      temp += char;
    } else {
      if (temp.length > result.length) {
        result = temp;
      }

      temp = "";
    }
  }

  if (temp.length > result.length) {
    result = temp;
  }

  return result;
}

console.log(findLongestWord(sentence));
