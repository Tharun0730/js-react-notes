const charArray = ["Hello", "world", "how", "are", "you"];

function convertArrayToWord(arr) {
  let sentence = "";

  for (const word of arr) {
    sentence += word + " ";
  }

  return sentence;
}

console.log(convertArrayToWord(charArray));
