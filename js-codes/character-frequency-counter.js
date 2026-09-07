const text = "aasssaaaaaa";

function countCharacters(text) {
  const count = {};

  for (const char of text) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  return count;
}

console.log(countCharacters(text));

// Output: { a: 8, s: 3 }
