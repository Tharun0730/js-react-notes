const str = "aabbcdde";

function findNonRepeating(str) {
  let obj = {};

  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

console.log(findNonRepeating(str));
